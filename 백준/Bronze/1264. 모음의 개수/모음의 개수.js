const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const inputData = fs.readFileSync(filePath).toString().split("\n");

let i = 0;
while (true) {
  const sentence = inputData[i];
  if (sentence === "#") break;

  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let j = 0; j < sentence.length; j++) {
    if (vowels.includes(sentence[j].toLowerCase())) {
      count++;
    }
  }
  console.log(count);
  i++;
};