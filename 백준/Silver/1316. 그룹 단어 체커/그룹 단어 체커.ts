const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require('fs').readFileSync(filePath).toString().trim().split('\n');

let result: number = 0;

for (let i = 1; i < input.length; i++) {
    let word: string = input[i];
    let check: boolean = true;
    let wordArr: string[] = [];
    for (let j = 0; j < word.length; j++) {
        if (wordArr.indexOf(word[j]) === -1) {
            wordArr.push(word[j]);
        } else {
            if (word[j] !== word[j - 1]) {
                check = false;
                break;
            }
        }
    }
    if (check) result++;
}

console.log(result);