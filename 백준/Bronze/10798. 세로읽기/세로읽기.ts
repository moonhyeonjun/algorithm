const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require('fs').readFileSync(filePath).toString().split('\n');

let result: string = '';

for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 5; j++) {
        if (input[j][i] === undefined) continue;
        result += input[j][i];
    }
}

console.log(result);