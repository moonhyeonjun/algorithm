const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim();

const year = parseInt(input);

year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? console.log(1) : console.log(0);