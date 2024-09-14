const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const T: number = +input[0];
let result: string = "";

for (let i = 1; i <= T; i++) {
  const words: string[] = input[i].split(" ");
  let reverseWords: string = "";

  for (let j = 0; j < words.length; j++) {
    reverseWords += words[j].split("").reverse().join("") + " ";
  }

  result += reverseWords.trim() + "\n";
}

console.log(result);