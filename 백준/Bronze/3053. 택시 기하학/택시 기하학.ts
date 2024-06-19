const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString();

const radius = parseInt(input);
const euclideanArea = Math.PI * radius * radius;
const taxiArea = 2 * radius * radius;

console.log(euclideanArea.toFixed(6));
console.log(taxiArea.toFixed(6));