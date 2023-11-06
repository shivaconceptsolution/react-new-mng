const express = require('express'); //import express
const router  = express.Router(); 
const teaController = require('../controllers/tea'); 
router.post('/tea', teaController.newTea); 
router.get('/tea',teaController.getTea);
module.exports = router; // export to use in server.js