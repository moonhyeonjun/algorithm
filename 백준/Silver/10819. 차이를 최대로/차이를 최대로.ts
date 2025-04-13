// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim().split("\n").map((v) => v.trim());

// 입력 파싱
const N: number = +input[0];
const nums: number[] = input[1].split(" ").map(Number);

let maxDiffSum = 0; // 최종 결과값: 최대 절댓값 합

/**
 * 두 수열 간의 차이 절댓값 총합을 계산하는 함수
 */
const calcSum = (arr: number[]): number => {
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    sum += Math.abs(arr[i] - arr[i + 1]);
  }
  return sum;
};

/**
 * 순열을 구하고 최댓값 갱신
 * 백트래킹 방식으로 모든 순열 탐색
 */
const visited = new Array(N).fill(false);
const perm: number[] = [];

const dfs = (depth: number): void => {
  if (depth === N) {
    const sum = calcSum(perm);
    maxDiffSum = Math.max(maxDiffSum, sum);
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    perm.push(nums[i]);
    dfs(depth + 1);
    perm.pop();
    visited[i] = false;
  }
};

// 순열 탐색 시작
dfs(0);

// 결과 출력
console.log(maxDiffSum);