const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require('fs').readFileSync(filePath).toString().trim();

const result = input.split('').sort((a, b) => b.localeCompare(a)).join('');

console.log(result);