const express 		= require('express');
const userModel		= require.main.require('./models/userModel');
const router 		= express.Router();

router.get('/', (req, res)=>{
	res.render('main/index');
});

router.post('/', (req, res)=>{

}); 

module.exports = router;