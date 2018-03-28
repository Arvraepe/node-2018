const fs = require('fs');

const raw = fs.readFileSync('./data/folder/promocodes.csv').toString();
const codes = raw.split('\r\n');

const unique = codes.every((item) => codes.filter(i => i === item).length === 1);

console.log(unique);