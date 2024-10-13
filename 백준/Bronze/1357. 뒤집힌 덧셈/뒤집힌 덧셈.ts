// 숫자를 뒤집는 함수
const reverseNumber = (num: number): number => {
  // 숫자를 문자열로 변환 후 뒤집고 다시 숫자로 변환
  return Number(num.toString().split("").reverse().join(""));
};

// 입력 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split(" ");

// X와 Y를 각각 뒤집고 더한 후, 그 결과를 다시 뒤집음
const X = parseInt(input[0]);
const Y = parseInt(input[1]);

const result = reverseNumber(reverseNumber(X) + reverseNumber(Y));

// 결과 출력
console.log(result);