// 입력값 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: number[] = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);

// 오름차순 정렬
input.sort((a, b) => a - b);

let [a, b, c] = input;

// 삼각형 조건에 맞지 않는 경우 가장 긴 변 조정
if (a + b <= c) {
  c = a + b - 1;
}

// 최대 둘레 계산
const maxPerimeter = a + b + c;

// 결과 출력
console.log(maxPerimeter);