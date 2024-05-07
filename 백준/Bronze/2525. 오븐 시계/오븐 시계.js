const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [hour, minute] = input[0].split(' ').map(Number);
const time = Number(input[1]);

let resultHour = hour;
let resultMinute = minute + time;

if (resultMinute >= 60) {
    resultHour += parseInt(resultMinute / 60);
    resultMinute %= 60;
}
    
if (resultHour >= 24) {
    resultHour %= 24;
}

console.log(resultHour, resultMinute);