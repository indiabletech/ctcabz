
/*
 * GET users listing.
 */
 
var fs = require('fs');  
var path = require('path');  
var uid = require('uid2');  
var mime = require('mime');   
var TARGET_PATH = path.resolve(__dirname, '../uploads/');  
var IMAGE_TYPES = ['image/jpeg', 'image/png']; 

 var multer  = require('multer')
 var uploads = multer({ dest: 'public/uploads/' }) 

  exports.index = function(req, res){
  res.render('./index',{page_title:"CTCABZ"});
};
 exports.login = function(req, res){
  res.render('./Drivers/login',{page_title:"Login Driver"});
};
 
 exports.registration = function(req, res){
  res.render('./Drivers/driver-Registration',{page_title:" Driver Registration"});
};

exports.docuploading = function(req, res){
  res.render('./Drivers/document-Uploading',{page_title:"Document uploading "});
};
 
 
 exports.finalcon = function(req, res){
  res.render('./Drivers/final-Term',{page_title:"Final Condition "});
};
 
 
 exports.selection = function(req, res){
  res.render('./Drivers/partner-Selection',{page_title:"Select Partner "});
};
 
 exports.personaldoc = function(req, res){
  res.render('./Drivers/personal-DocUploading',{page_title:"Personal document uploading "});
};

 exports.readyforride = function(req, res){
  res.render('./Drivers/ready-Toride',{page_title:"Are you ready to ride! "});
};

 exports.rideregistration = function(req, res){
  res.render('./Drivers/ride-Registration',{page_title:"Register here for Ride! "});
};

exports.conditions = function(req, res){
  res.render('./Drivers/terms-Conditions',{page_title:"Accept terms and conditions "});
}; 

exports.add = function(req, res){
  res.render('./Users/add',{page_title:"Add User"});
}; 

