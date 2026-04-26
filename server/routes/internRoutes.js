const express = require('express');
const router = express.Router();
const internController = require('../controllers/internController');

module.exports = (io) => {
    router.post('/register', (req, res) => internController.registerIntern(req, res, io));
    router.get('/all', internController.getAllInterns);
    return router;
};
