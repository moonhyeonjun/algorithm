// 파일 입력 처리
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 입력값 파싱
const [N, L] = input[0].split(" ").map(Number);
const heights = input[1].split(" ").map(Number);

// 과일 높이를 오름차순 정렬
heights.sort((a, b) => a - b);

let length = L;

// 과일을 순차적으로 먹을 수 있는지 확인
for (const h of heights) {
  if (h <= length) {
    length++; // 과일을 먹으면 길이 증가
  } else {
    break; // 현재 길이보다 높은 과일이 나오면 중단
  }
}

// 결과 출력
console.log(length);