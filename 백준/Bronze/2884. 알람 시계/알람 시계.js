const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const hour = parseInt(input[0]);
const minute = parseInt(input[1]);

if (minute - 45 >= 0) {
    console.log(hour, minute - 45);
} else { 
    hour - 1 < 0 ? console.log(23, minute + 15) :  console.log(hour - 1, minute + 15);
};