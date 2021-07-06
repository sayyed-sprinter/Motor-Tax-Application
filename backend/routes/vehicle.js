const express = require('express');
const router = express.Router();
const Vehicle = require('../models/vehicleModel');
const vehicleController = require('../controllers/vehicleController');

router.post('/vehicle/payTax', vehicleController);

module.exports = router;
