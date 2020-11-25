const express     = require('express');
const userModel   = require.main.require('./models/userModel');
const router    = express.Router();

const path = require('path');
const fileUpload = require('express-fileupload');
const mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'erp'
});
 
connection.connect();
 
global.db = connection;

router.get('/', (req, res)=>{
   message = '';
  res.render('addproduct/index');
});

/*router.get('/', addproduct.index);//call for main index page*/
/*router.post('/', addproduct.index);//call for signup post */
/*router.get('/profile/:id',routes.profile);*/


router.post('/', (req, res)=>{
  
   if(req.method == "POST"){
      var post  = req.body;
      var name= post.user_name;
      var pass= post.password;
      var fname= post.first_name;
      var lname= post.last_name;
      var mob= post.mob_no;
 
    if (!req.files)
        return res.status(400).send('No files were uploaded.');
 
    var file = req.files.uploaded_image;
    var img_name=file.name;
 
       if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){
                                 
              file.mv('public/images/upload_images/'+file.name, function(err) {
                             
                if (err)
 
                  return res.status(500).send(err);
                var sql = "INSERT INTO `users_image`(`first_name`,`last_name`,`mob_no`,`user_name`, `password` ,`image`) VALUES ('" + fname + "','" + lname + "','" + mob + "','" + name + "','" + pass + "','" + img_name + "')";
 
                var query = db.query(sql, function(err, result) {
                   res.redirect('profile/'+result.insertId);
                });
             });
          } else {
            message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
            res.render('index.ejs',{message: message});
          }
   } else {
      res.render('index');
   }
 



}); 




/*router.post('/', (req, res)=>{
res.render('addproduct/index');

});*/


// development only
 
/*router.get('/', routes.index);///call for main index page
router.post('/', routes.index);//call for signup post 
router.get('/profile/:id',routes.profile);*/

router.get('/profile/:id', (req, res)=>{
exports.profile = function(req, res){
	var message = '';
	var id = req.params.id;
    var sql="SELECT * FROM `users_image` WHERE `id`='"+id+"'"; 
    db.query(sql, function(err, result){
	  if(result.length <= 0)
	  message = "Profile not found!";
	  
      res.render('profile.ejs',{data:result, message: message});
   });
};
});

module.exports = router;