// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const str1 = input[0];
const str2 = input[1];

// 두 문자열의 길이 저장
const len1 = str1.length;
const len2 = str2.length;

// DP 테이블 초기화: (len1+1) x (len2+1) 크기의 2차원 배열
const dp: number[][] = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(0));

// 동적 계획법 적용
for (let i = 1; i <= len1; i++) {
  for (let j = 1; j <= len2; j++) {
    if (str1[i - 1] === str2[j - 1]) {
      // 문자가 같다면 이전 값에서 +1
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      // 문자가 다르면 위쪽 또는 왼쪽 중 큰 값 선택
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
}

// 결과 출력: 최장 공통 부분 수열의 길이
console.log(dp[len1][len2]);