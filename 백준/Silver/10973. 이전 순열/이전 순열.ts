// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const n: number = +input[0]; // 숫자 개수
const nums: number[] = input[1].split(" ").map(Number); // 주어진 순열

/**
 * 이전 순열을 구하는 함수
 * 시간복잡도: O(N)
 */
function prevPermutation(arr: number[]): number[] | -1 {
  const n = arr.length;

  // 1. 뒤에서부터 첫 번째 감소 지점 찾기
  let i = n - 1;
  while (i > 0 && arr[i - 1] <= arr[i]) {
    i--;
  }

  // 이미 가장 작은 순열이면 -1 반환
  if (i === 0) return -1;

  // 2. arr[i - 1]보다 작은 가장 큰 값 찾기
  let j = n - 1;
  while (arr[j] >= arr[i - 1]) {
    j--;
  }

  // 3. 둘을 swap
  [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];

  // 4. i부터 끝까지를 내림차순 정렬 (오름차순 후 reverse)
  const left = arr.slice(0, i);
  const right = arr.slice(i).reverse(); // 이미 내림차순 만들기 위해 reverse

  return [...left, ...right];
}

// 결과 계산 및 출력
const result = prevPermutation(nums);

if (result === -1) {
  console.log(-1);
} else {
  console.log(result.join(" "));
}