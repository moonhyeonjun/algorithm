const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

const digitCount = Array(10).fill(0);

for (let i = 0; i < input.length; i++) {
  const digit = Number(input[i]);
  digitCount[digit]++;
}

const sum69 = digitCount[6] + digitCount[9];
const setCount = Math.ceil(sum69 / 2);
digitCount[6] = setCount;
digitCount[9] = setCount;

const maxCount = Math.max(...digitCount);
console.log(maxCount);