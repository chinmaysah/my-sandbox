const fs = require('fs');
exports.append = (data) => {
    //create a file named details.log:
    fs.appendFile('logs/details.log', data, function (err) {
        if (err) throw err;
        console.log('Content appended successfully!');
    });
}

