// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력값 파싱
const [N, S, M] = input[0].split(" ").map(Number); // 곡 수, 시작 볼륨, 최대 볼륨
const V = input[1].split(" ").map(Number);         // 곡 시작 전 볼륨 변화량 배열

// DP 테이블 초기화: dp[i][v]는 i번째 곡까지 연주했을 때 볼륨 v가 가능한지를 의미
const dp: boolean[][] = Array.from({ length: N + 1 }, () => Array(M + 1).fill(false));

// 시작 볼륨은 가능하므로 true로 설정
dp[0][S] = true;

// DP 진행
for (let i = 1; i <= N; i++) {
  const volDiff = V[i - 1]; // 현재 곡에서 조절할 수 있는 볼륨 차이

  for (let v = 0; v <= M; v++) {
    if (dp[i - 1][v]) {
      // 볼륨 증가가 범위 내일 경우
      if (v + volDiff <= M) dp[i][v + volDiff] = true;
      // 볼륨 감소가 범위 내일 경우
      if (v - volDiff >= 0) dp[i][v - volDiff] = true;
    }
  }
}

// 마지막 곡에서 가능한 최대 볼륨 찾기
let result = -1;
for (let v = M; v >= 0; v--) {
  if (dp[N][v]) {
    result = v;
    break;
  }
}

// 결과 출력
console.log(result);