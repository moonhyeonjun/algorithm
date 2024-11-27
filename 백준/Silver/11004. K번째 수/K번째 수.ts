// input 값 처리
const input = require("fs").readFileSync("/dev/stdin")
  .toString().trim().split("\n").map((line) => line.split(" ").map(Number));

const [[N, K], arr] = input; // 첫 번째 줄과 두 번째 줄을 분리

console.log(solution(arr, K)); // K번째 수 출력

/**
 * K번째 수를 찾는 함수
 * @param arr 숫자 배열
 * @param K 찾고자 하는 K번째 수 (1-based index)
 * @returns K번째 수
 */
function solution(arr: number[], K: number): number {
  // 배열을 오름차순 정렬
  arr.sort((a, b) => a - b);

  // K번째 수 반환 (0-based index에 맞게 K-1)
  return arr[K - 1];
}