var express = require('express');
const Abiotic_controllers= require('../controllers/Abiotic');
var router = express.Router();
/* GET Abiotic */
router.get('/', Abiotic_controllers.Abiotic_view_all_Page );
module.exports = router;
