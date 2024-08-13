const express = require('express');
const router = express.Router();
const {sendEmail} = require('../controller/Mail')

router.post('/sendmail', sendEmail)

module.exports = router;
