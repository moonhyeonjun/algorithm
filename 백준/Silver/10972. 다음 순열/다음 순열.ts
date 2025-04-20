// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const perm = input[1].split(" ").map(Number);

/**
 * 다음 순열을 구하는 함수 (사전순)
 * @param arr 현재 순열
 * @returns 다음 순열 배열 또는 null (마지막 순열일 경우)
 */
function getNextPermutation(arr: number[]): number[] | null {
  // 1. 뒤에서부터 처음으로 감소하는 부분 찾기
  let i = arr.length - 2;
  while (i >= 0 && arr[i] >= arr[i + 1]) {
    i--;
  }

  // 만약 i가 -1이라면 마지막 순열
  if (i === -1) return null;

  // 2. 다시 뒤에서부터 arr[i]보다 큰 수를 찾아 교환
  let j = arr.length - 1;
  while (arr[j] <= arr[i]) {
    j--;
  }

  // arr[i]와 arr[j]를 swap
  [arr[i], arr[j]] = [arr[j], arr[i]];

  // 3. i+1부터 끝까지 오름차순 정렬 (reverse)
  const left = arr.slice(0, i + 1);
  const right = arr.slice(i + 1).reverse();
  return [...left, ...right];
}

const result = getNextPermutation(perm);

if (result === null) {
  console.log(-1);
} else {
  console.log(result.join(" "));
}