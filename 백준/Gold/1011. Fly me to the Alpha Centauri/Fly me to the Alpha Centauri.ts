// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 테스트 케이스 수
const T = parseInt(input[0]);

// 결과 저장 배열
const result: number[] = [];

// 각 테스트 케이스 처리
for (let i = 1; i <= T; i++) {
  const [xStr, yStr] = input[i].split(" ");
  const x = Number(xStr);
  const y = Number(yStr);
  const distance = y - x;

  // 중심값 n 구하기 (이동 거리의 제곱근 기준)
  const n = Math.floor(Math.sqrt(distance));

  // 공식에 따른 이동 횟수 결정
  if (distance === n * n) {
    result.push(2 * n - 1);
  } else if (distance <= n * n + n) {
    result.push(2 * n);
  } else {
    result.push(2 * n + 1);
  }
}

// 결과 출력
console.log(result.join("\n"));