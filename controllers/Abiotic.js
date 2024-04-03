
var Abiotic = require('../models/Abiotic');
// List of allAbiotic
exports.Abiotic_list = function (req, res) {
    res.send('NOT IMPLEMENTED:Abiotic list');
};
// for a specificAbiotic.
exports.Abiotic_detail = function (req, res) {
    res.send('NOT IMPLEMENTED:Abiotic detail: ' + req.params.id);
};
// HandleAbiotic create on POST.
exports.Abiotic_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED:Abiotic create POST');
};
// HandleAbiotic delete from on DELETE.
exports.Abiotic_delete = function (req, res) {
    res.send('NOT IMPLEMENTED:Abiotic delete DELETE ' + req.params.id);
};

// HandleAbiotic update form on PUT.
exports.Abiotic_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED:Abiotic update PUT' + req.params.id);
};

//List of all Abiotic
exports.Abiotic_list = async function (req, res) {
    try {
        theAbiotic = await Abiotic.find();
        res.send(theAbiotic);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.Abiotic_view_all_Page = async function (req, res) {
    try {
        theAbiotics = await Abiotic.find();
        res.render('Abiotic', { title: 'Abiotic Search Results', results: theAbiotics });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


// Handle Abiotic create on POST.
exports.Abiotic_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Abiotic();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Abiotic_type":"goat", "cost":12, "size":"large"}
    document.name= req.body.name;
    document.type = req.body.type;
    document.cost = req.body.cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
   
   
 