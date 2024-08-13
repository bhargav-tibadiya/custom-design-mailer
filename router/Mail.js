const express = require('express');
const router = express.Router();

router.post('/sendmail', sendMail)

module.exports = router;
