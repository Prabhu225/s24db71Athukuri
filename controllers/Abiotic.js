var Abiotic = require('../models/Abiotic');
// List of all Abiotic
exports.Abiotic_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Abiotic list');
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
 
// Handle Abiotic create on POST.
exports.Abiotic_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Abiotic create POST');
};
// Handle Abiotic delete from on DELETE.
exports.Abiotic_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Abiotic delete DELETE ' + req.params.id);
};
// Handle Abiotic delete on DELETE.
exports.Abiotic_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Abiotic.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
   
// Handle Abiotic update form on PUT.
exports.Abiotic_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Abiotic.findById( req.params.id)
// Do updates of properties
if(req.body.name)
toUpdate.name = req.body.name;
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
 
 
exports.Abiotic_list = async function(req, res) {
    try{
    theAbiotic = await Abiotic.find();
    res.send(theAbiotic);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
 
 
exports.Abiotic_view_all_Page = async function(req, res) {
    try{
    theAbiotics = await Abiotic.find();
    res.render('Abiotic', { name: 'Abiotic Search Results', results: theAbiotics });
    }
    catch(err){
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
    document.name = req.body.name;
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
 //Handle a show one view with id specified by query
 exports.Abiotic_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Abiotic.findById( req.query.id)
    res.render('Abioticdetail',
    { title: 'AbioticDetail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    //Handle building the view for creating a Abiotic.
    // No body, no in path parameter, no query.
    // Does not need to be async
    exports.Abiotic_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Abioticcreate', { title: 'Abiotic Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for updating a Abiotic.
// query provides the id
exports.Abiotic_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Abiotic.findById(req.query.id)
    res.render('Abioticupdate', { title: 'Abiotic Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle a delete one view with id from query
exports.Abiotic_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Abiotic.findById(req.query.id)
    res.render('Abioticdelete', { title: 'Abiotic Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
    

 