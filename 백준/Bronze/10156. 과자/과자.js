const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

const [price, count, money] = input;

const totalPrice = price * count;

console.log(totalPrice > money ? totalPrice - money : 0);