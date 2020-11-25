const db            = require('./db');

module.exports = {
	send_message: (muser,callback) => {
        var sql = `INSERT INTO employee ( ename,eemail,epass) VALUES (?,?,?)`;
        db.getResults(sql, [muser.mname, muser.memail,muser.mpass], (results) => {
            if(results.length > 0) {
                callback(true);
            } else {
                callback(false);
            }
        });
    },
    getById: function(id, callback){

    },
    getAll: function(callback){
        var sql = "select * from employee";
        db.getResults(sql, null, function(results){
            callback(results);
        });
    },
    insert: function(user, callback){

    },
    update:function(user, callback){

    },
    delete: function(id, callback){

    }
}