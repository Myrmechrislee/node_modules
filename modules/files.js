module.exports = function find(path) {
    var fs = require('fs');
    fs.readFile(path, function(err, data){
        if (err) {
            console.log(err);
            return err;
        } else {
            return data
        };
    });
}