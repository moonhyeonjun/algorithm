// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split(" ");

// 입력값 파싱
let [N, k, l] = input.map(Number);

// 라운드 수 계산
let round: number = 0;

while (k !== l) {
  k = Math.ceil(k / 2);
  l = Math.ceil(l / 2);
  round++;
}

console.log(round);