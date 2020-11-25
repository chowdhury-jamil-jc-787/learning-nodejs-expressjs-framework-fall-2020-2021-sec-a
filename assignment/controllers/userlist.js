const express 		= require('express');
const userModel		= require.main.require('./models/userModel');
const router 		= express.Router();
const mysql = require('mysql');
const ejs = require('ejs');
const bodyParser = require('body-parser');


const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'erp'
});

connection.connect(function(error){
    if(!!error) console.log(error);
    else console.log('Database Connected!');
}); 

router.get('/',(req, res) => {
    // res.send('CRUD Operation using NodeJS / ExpressJS / MySQL');
    let sql = "SELECT * FROM users";
    let query = connection.query(sql, (err, rows) => {
        if(err) throw err;
        res.render('userlist/user_index', {
            title : 'List of Customer:',
            users : rows
        });
    });
});

router.get('/add',(req, res) => {
    res.render('userlist/user_add', {
        title : 'Add Customer into the list:'
    });
});

router.post('/save',(req, res) => { 
    let data = {name: req.body.name, email: req.body.email, phone_no: req.body.phone_no};
    let sql = "INSERT INTO users SET ?";
    let query = connection.query(sql, data,(err, results) => {
      if(err) throw err;
      res.redirect('/userlist');
    });
});

router.get('/edit/:userId',(req, res) => {
    const userId = req.params.userId;
    let sql = `Select * from users where id = ${userId}`;
    let query = connection.query(sql,(err, result) => {
        if(err) throw err;
        res.render('userlist/user_edit', {
            title : 'Edit Customer',
            user : result[0]
        });
    });
});


router.post('/update',(req, res) => {
    const userId = req.body.id;
    let sql = "update users SET name='"+req.body.name+"',  email='"+req.body.email+"',  phone_no='"+req.body.phone_no+"' where id ="+userId;
    let query = connection.query(sql,(err, results) => {
      if(err) throw err;
      res.redirect('/userlist');
    });
});


router.get('/delete/:userId',(req, res) => {
    const userId = req.params.userId;
    let sql = `DELETE from users where id = ${userId}`;
    let query = connection.query(sql,(err, result) => {
        if(err) throw err;
        res.redirect('/userlist');
    });
});


module.exports = router;