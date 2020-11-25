const express       = require('express');
const userModel     = require.main.require('./models/userModel');
const router        = express.Router();




// another routes also appear here

// this script to fetch data from MySQL databse table
router.get('/', function(req, res, next) {

    var sql='SELECT * FROM book';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('books/user-list', { title: 'User List', userData: data});
  });
});

module.exports = router;