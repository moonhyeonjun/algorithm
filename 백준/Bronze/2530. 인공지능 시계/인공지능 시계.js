const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const startTime = input[0].split(' ').map(Number);
const [hour, minute, second] = startTime;
const time = Number(input[1]);

const totalSecond = hour * 3600 + minute * 60 + second + time;
const resultHour = Math.floor(totalSecond / 3600) % 24;
const resultMinute = Math.floor(totalSecond / 60) % 60;
const resultSecond = totalSecond % 60;

console.log(resultHour, resultMinute, resultSecond);