// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

// 이모티콘 개수 계산
const happyCount = (input.match(/:-\)/g) || []).length;
const sadCount = (input.match(/:-\(/g) || []).length;

// 결과 출력
if (happyCount === 0 && sadCount === 0) {
  console.log("none");
} else if (happyCount === sadCount) {
  console.log("unsure");
} else if (happyCount > sadCount) {
  console.log("happy");
} else {
  console.log("sad");
}