const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split(" ");

const N: number = parseInt(input[0]);
const M: number = parseInt(input[1]);

const result: number[] = [];
let output: string = "";

function backtrack(depth: number) {
    if (depth === M) {
        output += result.join(' ') + '\n';
        return;
    }

    for (let i = 1; i <= N; i++) {
        result[depth] = i;
        backtrack(depth + 1);
    }
}

backtrack(0);
console.log(output);