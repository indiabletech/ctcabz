
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

exports.list = function(req, res){
var row1,row2;
  req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM customer order by id desc',function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
			//row1=rows; 
			
			res.render('./Users/index',{page_title:"Customers - Node.js",data:rows}); 
         });
		 
		/* var query = connection.query('SELECT * FROM customer',function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
			res.render('./Users/index',{page_title:"Customers - Node.js",data:row1,data1:rows}); 
         });*/ 
        console.log(query.sql);
    });
  
};

exports.add = function(req, res){
  res.render('./Users/add',{page_title:"Add User"});
};

exports.upload_form = function(req, res){
  res.render('./Users/upload',{page_title:"Upload Image"});
};

exports.edit = function(req, res){
    
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM customer WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('./Users/edit',{page_title:"Edit Customers - Node.js",data:rows});
                
           
         });
         
         //console.log(query.sql);
    }); 
};

/*Save the customer*/
exports.save = function(req,res){  
    var newPath ;
   
    req.getConnection(function (err, connection) { 
      var data = {
            
            name    : req.body.name,
            address : req.body.address,
            email   : req.body.email,
            phone   : req.body.phone,
			image: req.files[0].filename
        
        }; 
        
		console.log(data);
		
        var query = connection.query("INSERT INTO customer set ? ",data, function(err, rows)
        {
  
          if (err)
              console.log("Error inserting : %s ",err );
         
         res.redirect('/user'); 
          
        });
        
       // console.log(query.sql); get raw query
    
    });
}; 

exports.update = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    var data = [];
    req.getConnection(function (err, connection) {
        
		
		if(req.files[0].filename !="" || req.files[0].filename !=null || req.files[0].filename!=undefind){
		
			var data = { 
				name    : input.name,
				address : input.address,
				email   : input.email,
				phone   : input.phone,
				image: req.files[0].filename 
			};
        }else{
			var data = { 
				name    : input.name,
				address : input.address,
				email   : input.email,
				phone   : input.phone 
			}; 
		}
        connection.query("UPDATE customer set ? WHERE id = ? ",[data,id], function(err, rows)
        { 
          if (err)
              console.log("Error Updating : %s ",err ); 
			  res.redirect('/user');  
        }); 
    });
}; 

exports.deletes = function(req,res){
          
     var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM customer  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
              res.redirect('/user'); 
             
        });
        
     });
};


