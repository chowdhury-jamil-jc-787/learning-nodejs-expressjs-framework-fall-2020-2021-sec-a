const express 	= require('express');
const userModel = require.main.require('./models/create_manager');
const router 	= express.Router();

router.get('/', (req, res)=>{
	res.render('msignup/msignup');
});



router.post('/', (req, res)=>{
	var muser = {
		mname: req.body.mname,
		mpass: req.body.mpass,
		memail: req.body.memail
	};
	userModel.send_message(muser, function(status){
		//console.log(status);
		
		res.redirect('/login');
		
	});
});






module.exports = router;