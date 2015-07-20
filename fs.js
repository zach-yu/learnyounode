var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var count = buf.toString().split('\n').length;
console.log(count - 1);