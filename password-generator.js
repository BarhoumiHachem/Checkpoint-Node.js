var fs = require("fs")

// function that generates random passwords and console.log() that password
var generator = require('generate-password');

var passwords = generator.generateMultiple({
	length: 10,
    numbers: true,
	uppercase: false
});
// passwords(azerty);
console.log(passwords);