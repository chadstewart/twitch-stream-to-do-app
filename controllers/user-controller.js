const dbConnection = require("../utils/db-connection");

exports.user_get = (req, res) => {
    let sqlQuery = `
    SELECT
      *
    FROM
      Users
    WHERE user_name='${'chadrs'}' and user_password='${'hahapasshere'}'`;

    return dbConnection.query(sqlQuery, (err, result) => {
        if(err) {
            res.status(500);
            throw err;
        }

        return res.status(200).send(result);
    });
};

exports.user_new = (req, res) => {

};

exports.user_replace = (req, res) => {

};

exports.user_modify = (req, res) => {

};

exports.user_delete = (req, res) => {

};