const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim();

const chess_pieces = [1, 1, 2 ,2 ,2 ,8]

const pieces = input.split(" ").map(Number);

let result = "";

for (let i = 0; i < 6; i++) {
    result += chess_pieces[i] - pieces[i] + " ";
};

console.log(result);