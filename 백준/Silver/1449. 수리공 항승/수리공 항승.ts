// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 파싱
const [N, L] = input[0].split(" ").map(Number); // 누수 위치 개수와 테이프 길이
const leakPoints = input[1].split(" ").map(Number); // 누수 위치 배열

// 누수 위치를 오름차순 정렬
leakPoints.sort((a, b) => a - b);

let tapeCount = 0; // 필요한 테이프 개수
let coverEnd = 0;  // 현재 테이프가 커버하는 끝 위치

for (let i = 0; i < N; i++) {
  const leak = leakPoints[i];

  // 현재 누수 위치가 테이프 커버 범위 밖이면 새로운 테이프 필요
  if (leak > coverEnd) {
    tapeCount++;
    // 테이프는 좌우로 0.5씩 더 커버하므로, 시작 위치는 leak - 0.5
    coverEnd = leak - 0.5 + L;
  }
}

console.log(tapeCount);