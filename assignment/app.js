//declaration
const express 			= require('express');	
const bodyParser 		= require('body-parser');
const exSession 		= require('express-session');
const cookieParser 		= require('cookie-parser');
const path = require('path');
const fs = require('fs');
const multer = require('multer');


const login				= require('./controllers/login');
const logout			= require('./controllers/logout');
const home				= require('./controllers/home');
const user				= require('./controllers/user');
const msignup		    = require('./controllers/msignup');
const checking		    = require('./controllers/checking');
const emanagement		    = require('./controllers/emanagement');
const products		    = require('./controllers/products');
const books		    = require('./controllers/books');
const customer		    = require('./controllers/customer');
const userlist		    = require('./controllers/userlist');
const mail		    = require('./controllers/mail');
const pdfmake		    = require('./controllers/pdfmake');
const addproduct		    = require('./controllers/addproduct');
/*const profile		    = require('./controllers/profile');*/
const main		    = require('./controllers/main');
const lg		    = require('./controllers/lg');
const app				= express();
const port				= 3000;



//set views file
app.set('views',path.join(__dirname,'views'));
//configuration
app.set('view engine', 'ejs');


//middleware

app.use('/abc', express.static('assets'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(exSession({secret: 'secret value', saveUninitialized: true, resave: false}));


app.use('/login', login);
app.use('/home', home);
app.use('/logout', logout);
app.use('/user', user);
app.use('/msignup', msignup);
app.use('/checking', checking);
app.use('/emanagement', emanagement);
app.use('/products', products);
app.use('/books', books);
app.use('/customer', customer);
app.use('/userlist', userlist);
app.use('/mail', mail);
app.use('/pdfmake', pdfmake);
app.use('/addproduct', addproduct);
app.use('/main', main);
app.use('/lg', lg);
/*app.use('/profile', profile);*/

//router
app.get('/', (req, res)=>{
	res.render('main/index');
});

//server startup
app.listen(port, (error)=>{
	console.log('server strated at '+port);
});