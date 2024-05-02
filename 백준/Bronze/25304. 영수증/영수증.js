const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const totalPrice = Number(input.shift());
const list = input.slice(1);

const realPrice = list.reduce((acc, cur) => {
    const [price, count] = cur.split(' ').map(Number);
    return acc + price * count;
}, 0);

console.log(totalPrice === realPrice ? 'Yes' : 'No');