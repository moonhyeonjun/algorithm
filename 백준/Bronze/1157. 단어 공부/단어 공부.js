const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('');

let obj = {};
let max = 0;
let result = '';
let isSame = false;

input.forEach((v) => {
    if (v === v.toUpperCase()) {
        v = v.toLowerCase();
    }
    if (obj[v] === undefined) {
        obj[v] = 1;
    } else {
        obj[v]++;
    }
});

for (let key in obj) {
    if (obj[key] > max) {
        max = obj[key];
        result = key.toUpperCase();
        isSame = false;
    } else if (obj[key] === max) {
        isSame = true;
    }
};

console.log(isSame ? '?' : result);