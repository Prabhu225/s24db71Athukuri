var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Abiotic_controller = require('../controllers/Abiotic');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Abiotic ROUTES ///
// POST request for creating a Abiotic.
router.post('/Abiotic', Abiotic_controller.Abiotic_create_post);
// DELETE request to delete Abiotic.
router.delete('/Abiotic/:id', Abiotic_controller.Abiotic_delete);
// PUT request to update Abiotic.
router.put('/Abiotic/:id', Abiotic_controller.Abiotic_update_put);
// GET request for one Abiotic.
router.get('/Abiotic/:id', Abiotic_controller.Abiotic_detail);
// GET request for list of all Abiotic items.
router.get('/Abiotic', Abiotic_controller.Abiotic_list);
module.exports = router;

