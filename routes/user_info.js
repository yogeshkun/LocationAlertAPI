const express = require('express');
const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

require('../db/conn');
const User = require('../models/user_schema');

// Getting all
router.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Inside router',
  });
});

// API to store registion values
router.post('/register', (req, res) => {
  const {name, email} = req.body;

  if (!name || !email ) {
    return res.status(422).json({error: 'PLz filled the field properly'});
  }

  User.findOne({email: email})
    .then(UserExist => {
      if (UserExist) {
        return res.status(422).json({error: 'User Already exist'});
      }

      const user = new User({name, email});

      user
        .save()
        .then(() => {
          res.status(201).json({message: 'Sucessfully'});
        })
        .catch(err => res.status(500).json({error: 'Failed, registerd', err}));
    })
    .catch(err => {
      console.log(err);
    });
});

const middleware = (req, res) => {
  console.log('Middle');
  next();
};
// Store the live location data
const locations = [];

// API to store live latitude and longitude
router.post('/api/location', (req, res) => {
  const {latitude, longitude} = req.body;

  // Add the new location data to the locations array
  locations.push({latitude, longitude});

  res.status(200).json({
    message: 'Location data received successfully!',
  });
});

router.get('/api/clear', (req, res) => {
  // const { latitude, longitude } = req.body;

  // Add the new location data to the locations array
  locations.length = 0;

  res.status(200).json({
    message: 'Location data cleared successfully!',
  });
});

// API to retrieve all the stored location data
router.get('/api/location', async (req, res) => {
  res.status(200).json(locations);
});

module.exports = router;
