
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('login', { title: 'Hello World' });
};
exports.logout = function(req, res){
  res.render('login', { title: 'Hello World' });
};
exports.login = function(req,res){  
    var newPath ;
    
    req.getConnection(function (err, connection) {  
            username= req.body.username,  
            password= req.body.password  
		 //console.log(data);
		
        var query = connection.query("SELECT * FROM admin WHERE username = ? and password=? and role='Admin'",[username,password],function(err,rows)
        {
  
          if (err){
              console.log("Error inserting : %s ",err );
			  res.render('./login',{page_title:"CTCABZ",data:'Sorry Username and Password does not match..'});
		  }else{
         
          res.render('./index',{page_title:"CTCABZ",data:rows});
		 // res.send("saved");
          }
        });
        
      console.log(query.sql);  
    
    });
}; 