// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
let sequence: number[] = input[1].split(",").map(Number);

// K번 차이 수열 계산
for (let k = 0; k < K; k++) {
  if (sequence.length <= 1) break; // 길이가 1 이하가 되면 중단
  sequence = sequence.slice(1).map((num, idx) => num - sequence[idx]);
}

// 결과 출력
console.log(sequence.join(","));