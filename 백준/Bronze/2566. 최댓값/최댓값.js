const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map((arr) => arr.split(" ").map(Number));

let answers = "";
let y = 0;
let max = Math.max(...input[0]);

for (let i = 1; i < input.length; i++) {
	let tempMax = Math.max(...input[i]);
	if (max < tempMax) {
		max = tempMax;
		y = i;
	}
}

answers += max + "\n";
answers += y + 1 + " ";
answers += input[y].indexOf(max) + 1;
console.log(answers.trim());