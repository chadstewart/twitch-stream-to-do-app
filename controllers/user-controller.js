const dbConnection = require("../utils/db-connection");

exports.user_get = (req, res) => {
    const query = req.query;

    if(("userName" in query && "password" in query) &&
       (query.userName !== '' && query.password !== '')) {

           const { userName, password } = query;
           const sqlQuery = `
           SELECT
             *
           FROM
             Users
           WHERE user_name='${userName}' and user_password='${password}'`;

           //Modify DB to use Unique Index
       
           return dbConnection.query(sqlQuery, (err, result) => {
               if(err) {
                   res.status(500);
                   throw err;
               }

               if(result.length === 0) return res.status(404).send('No user was found!');       
               return res.status(200).send(result);
           });
       } else {
           return res.status(400).send('There is something wrong with your request.');
       }
};

exports.user_new = (req, res) => {

};

exports.user_replace = (req, res) => {

};

exports.user_modify = (req, res) => {

};

exports.user_delete = (req, res) => {

};