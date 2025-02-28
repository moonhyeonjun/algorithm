// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 단어 개수 N
const N: number = Number(input.shift());
let answer: string = "";

for (let i = 0; i < N; i++) {
    const rev = input[i].split("").reverse().join("");
    if (input.includes(rev)) {
        answer = input[i];
        break;
    }
}

console.log(`${answer.length} ${answer[(answer.length - 1) / 2]}`);