
/**
 * Module dependencies.
 */

var express = require('express');
var controller = require('./controller'); 
var http = require('http');
var path = require('path');
var random = require("random-js")();
var bodyParser = require('body-parser')
 var multer  = require('multer')
 var uid = require('uid2');  
 var mime = require('mime');    

var app = express();

var connection  = require('express-myconnection'); 
var mysql = require('mysql');

// all environments
app.set('port', process.env.PORT || 8083);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


app.use(express.static(path.join(__dirname, 'public'))); 
// development only
//if ('development' == app.get('env')) {
  //app.use(express.errorHandler());
//}

/*------------------------------------------
    connection peer, register as middleware
    type koneksi : single,pool and request 
-------------------------------------------*/

 
var DriverController = require('./controller/Driver/DriverController'); 

app.get('/', DriverController.index);
app.get('/drivers/login', DriverController.login);  
app.get('/drivers/registration', DriverController.registration);  
app.get('/drivers/doc-uploading', DriverController.docuploading);  
app.get('/drivers/final-condition', DriverController.finalcon);  
app.get('/drivers/partner-selection', DriverController.selection);  
app.get('/drivers/personal-doc', DriverController.personaldoc);  
app.get('/drivers/ready-for-ride', DriverController.readyforride);  
app.get('/drivers/ride-registration', DriverController.rideregistration);
app.get('/drivers/terms-condition', DriverController.conditions);  
 
 

app.get('/Drivers/index', function(req, res){
   res.render('./Drivers/index',{page_title:"CTCABZ"});
}); 
 app.get('*', function(req, res){
   res.render('./404',{page_title:"CTCABZ"});
});
 
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
