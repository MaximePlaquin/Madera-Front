var fs = require('fs');

var package = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

exports.version = package.version;
exports.name = package.name;
