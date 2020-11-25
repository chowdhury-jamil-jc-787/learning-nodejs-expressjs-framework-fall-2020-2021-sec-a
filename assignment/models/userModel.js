const db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql = "select * from manager where memail=? and mpass=?";
		db.getResults(sql, [user.username, user.password], function(results){
			if(results.length >0 ){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getById: function(username, callback){
        var sql = "select * from manager where memail=?";
 
        db.getResults(sql, [username], function (results) {
            if (results.length > 0) {
                callback(results[0]);
            } else {
                callback(null);
            }
        });
    },
    updateProfile: function (user, callback) {
        var sql = "update manager set  mpass=?, mname=?  where memail=?";
        db.execute(sql, [  user.password, user.username, user.email  ], function (status) {
            if (status) {
                callback(true);
            } else {
                callback(false);
            }
        });
    },
	getAll: function(callback){
		var sql = "select * from manager WHERE memail = 'nafi12@gmail.com'";
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