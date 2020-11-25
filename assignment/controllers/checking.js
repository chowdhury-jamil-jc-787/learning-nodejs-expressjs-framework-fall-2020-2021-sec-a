const express 		= require('express');
const userModel		= require.main.require('./models/userModel');
const router 		= express.Router();

router.get('/', (req, res)=>{
	res.render('checking/checking');
});

router.post('/', (req, res)=>{


	if(req.body.code=="jc787"){
	res.redirect('/msignup');}
	else{
		res.redirect('/checking');
	}
}); 

module.exports = router;