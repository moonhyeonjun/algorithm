const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const burger = input.slice(0, 3).map(Number);
const drink = input.slice(3).map(Number);

const minBurger = Math.min(...burger);
const minDrink = Math.min(...drink);

console.log(minBurger + minDrink - 50);