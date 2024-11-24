// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 데이터 처리
const [N, M] = input[0].split(" ").map(Number); // 성의 세로 크기(N)와 가로 크기(M)
const castle = input.slice(1); // 성의 상태 배열

// 경비원이 없는 행(row)과 열(column)을 카운트
let rowGuardsNeeded = 0; // 경비원이 없는 행의 수
let columnGuardsNeeded = 0; // 경비원이 없는 열의 수

// 행(row) 기준으로 경비원이 없는지 확인
for (let i = 0; i < N; i++) {
  if (!castle[i].includes("X")) {
    rowGuardsNeeded++;
  }
}

// 열(column) 기준으로 경비원이 없는지 확인
for (let j = 0; j < M; j++) {
  let hasGuard = false;
  for (let i = 0; i < N; i++) {
    if (castle[i][j] === "X") {
      hasGuard = true;
      break;
    }
  }
  if (!hasGuard) {
    columnGuardsNeeded++;
  }
}

// 결과 출력: 추가해야 하는 경비원의 최솟값
console.log(Math.max(rowGuardsNeeded, columnGuardsNeeded));