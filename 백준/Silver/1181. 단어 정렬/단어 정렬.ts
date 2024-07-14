const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require('fs').readFileSync(filePath).toString().trim().split("\n");

const N: number = parseInt(input[0]);
const words: string[] = input.slice(1);

const setWords = new Set(words);

const sortedWords = Array.from(setWords).sort((a, b) => {
    if (a.length === b.length) {
        return a.localeCompare(b);
    } else {
        return a.length - b.length;
    }
});

console.log(sortedWords.join("\n"));