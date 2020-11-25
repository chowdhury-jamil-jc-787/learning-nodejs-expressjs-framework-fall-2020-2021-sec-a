const db            = require('./db');

module.exports = {
	send_message: (muser,callback) => {
        var sql = `INSERT INTO manager ( mname,memail,mpass) VALUES (?,?,?)`;
        db.getResults(sql, [muser.mname, muser.memail,muser.mpass], (results) => {
            if(results.length > 0) {
                callback(true);
            } else {
                callback(false);
            }
        });
    },
}