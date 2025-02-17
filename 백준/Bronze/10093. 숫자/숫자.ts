import * as fs from "fs";

// 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input: string = fs.readFileSync(filePath).toString().trim();

// 입력값을 숫자로 변환 후 정렬
const numbers: number[] = input.split(" ").map(Number);
const sorted: number[] = [...numbers].sort((a, b) => a - b);

const [first, second] = sorted;

if (first === second) {
  console.log(0);
} else {
  console.log(second - first - 1);

  let result = "";
  for (let i = first + 1; i < second; i++) {
    result += `${i} `;
  }
  console.log(result.trim());
}