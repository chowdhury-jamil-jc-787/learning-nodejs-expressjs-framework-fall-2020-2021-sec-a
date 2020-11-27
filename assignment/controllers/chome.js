const express 	= require('express');
const userModel = require.main.require('./models/userModel');
const router 	= express.Router();


var name1;
router.get('*',  (req, res, next)=>{
	name1=req.cookies['uname'];
	if(req.cookies['uname'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/', (req, res)=>{
	res.render('chome/index', {name: name1, id:'123'});
});


router.get('/userlist', (req, res)=>{

	userModel.getAll(function(results){
		res.render('chome/userlist', {users: results});
	});

})

module.exports = router;