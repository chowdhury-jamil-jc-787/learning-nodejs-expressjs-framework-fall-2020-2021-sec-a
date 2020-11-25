const express           = require('express');

const main_controll		= require.main.require('./models/modify_manager');


const router            = express.Router();

router.get('*', (req, res, next) => {
	if(req.session.user == null) {
		res.redirect('/profile');
	}
	else {
		next();
	}
});

router.get('/profile', (req, res) => {
	var user =   req.session.user;

	var username = {
		name: user.full_name,
		uname: user.username
	};

	

});


//         User Profile Controller >>>>>>>>>>>>>>>>>>>>>>


router.get('/profile', (req, res) => {
	var user =   req.session.user;
	var profile = {
		id: user.id,
		full_name: user.full_name,
		username: user.username,
		password: user.password,
		email: user.email,
		contact: user.contact,
		address: user.address
	};

	res.render('profile/profile', profile);
});


router.get('/profile/:username', (req, res) => {
	var user =   req.session.user;
	var profile = {
		id: user.id,
		full_name: user.full_name,
		username: user.username,
		password: user.password,
		email: user.email,
		contact: user.contact,
		address: user.address
	};

	res.render('profile/profile', profile);
});


router.post('/profile/:username', (req, res)=>{
	var edit_profile = {
		id: req.body.id,
		full_name: req.body.full_name,
		username: req.body.username,
		password: req.body.password,
		email: req.body.email,
		contact: req.body.contact,
		address: req.body.address

	};

	main_controll.buyer_profileUpdate(profile, function(status){
		//console.log(status);
		
		if(status == true){
			res.send('Your profile is updated....');

		}
		
	});
});

module.exports = router;