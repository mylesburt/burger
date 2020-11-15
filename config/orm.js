const connection = require("./connection.js");

//Rename these for the selectAll(), insertOne(), updateOne() functions

const orm = {
    selectWhere: function (tableInput, colToSearch, valOfCol) {
        let queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    selectAndOrder: function (whatToSelect, table, orderCol) {
        let queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
        console.log(queryString);
        connection.query(queryString, [whatToSelect, table, orderCol], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    findWhoHasMost: function (tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
        let queryString =
            "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

        connection.query(
            queryString,
            [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
            function (err, result) {
                if (err) throw err;
                console.log(result);
            }
        );
    }
};

module.exports = orm;