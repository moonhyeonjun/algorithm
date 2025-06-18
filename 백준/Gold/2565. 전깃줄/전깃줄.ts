// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 전깃줄 개수
const N = +input[0];

// 전깃줄 연결 정보 [A, B] 배열
const wires: [number, number][] = input.slice(1).map(line => {
  const [a, b] = line.split(" ").map(Number);
  return [a, b];
});

// A 기준으로 오름차순 정렬
wires.sort((a, b) => a[0] - b[0]);

// B 위치만 따로 배열로 추출
const B_positions = wires.map(wire => wire[1]);

// LIS(Longest Increasing Subsequence)를 구하는 함수
function getLIS(arr: number[]): number {
  const dp: number[] = [];

  for (let num of arr) {
    // 이분 탐색으로 dp 배열 내에서 현재 num이 들어갈 위치 찾기
    let left = 0;
    let right = dp.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (dp[mid] < num) left = mid + 1;
      else right = mid;
    }

    // num이 들어갈 자리에 갱신 또는 추가
    dp[left] = num;
  }

  return dp.length;
}

// 전체 전깃줄 수 - LIS 길이 = 제거할 전깃줄 수
const lisLength = getLIS(B_positions);
console.log(N - lisLength);