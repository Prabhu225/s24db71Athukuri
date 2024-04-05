
var Abiotic = require('../models/Abiotic');
// List of allAbiotic
exports.Abiotic_list = function (req, res) {
    res.send('NOT IMPLEMENTED:Abiotic list');
};
// for a specific Abiotic.
exports.Abiotic_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Abiotic.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
exports.Abiotic_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Abiotic.findById( req.params.id)
// Do updates of properties
if(req.body.Abiotic_name)
toUpdate.Abiotic_name = req.body.Abiotic_name;
if(req.body.type) toUpdate.type = req.body.type;
if(req.body.cost) toUpdate.cost = req.body.cost;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
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
   
   
 