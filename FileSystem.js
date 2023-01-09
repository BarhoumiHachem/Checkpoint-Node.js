var fs = require("fs")

//create the file
fs.writeFile('welcome.txt', 'Hello Node', function (err) {
    if (err) {
        return console.error(err);
    }
});
// read the file
fs.readFile('welcome.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("the file contains: " + data.toString());
});