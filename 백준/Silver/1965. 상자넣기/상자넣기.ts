// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 파싱
const n: number = parseInt(input[0]);
const sizes: number[] = input[1].split(" ").map(Number);

// dp[i]: i번째 상자를 마지막으로 포함할 때의 최대 상자 개수
const dp: number[] = Array(n).fill(1); // 최소한 자기 자신은 포함하므로 초기값은 1

// LIS 알고리즘 적용
for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (sizes[j] < sizes[i]) {
      // j번째 상자에 i번째 상자를 넣을 수 있으면, dp[i] 갱신
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

// dp 배열 중 가장 큰 값이 최대 상자 개수
const maxBoxes = Math.max(...dp);
console.log(maxBoxes);