var express = require('express');
const Abiotic_controllers= require('../controllers/Abiotic');
var router = express.Router();
/* GET costumes */
router.get('/', Abiotic_controllers.Abiotic_view_all_Page );
/* GET detail food page */
router.get('/detail', Abiotic_controllers.Abiotic_view_one_Page);
//* GET create costume page */
router.get('/create', Abiotic_controllers.Abiotic_create_Page);
/* GET create update page */
router.get('/update', Abiotic_controllers.Abiotic_update_Page);
/* GET delete costume page */
router.get('/delete', Abiotic_controllers.Abiotic_delete_Page);


module.exports = router;