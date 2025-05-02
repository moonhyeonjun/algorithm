// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);  // N: 배열 크기, K: 저장 횟수
const A: number[] = input[1].split(" ").map(Number);  // 정렬할 배열

let saveCount = 0;       // 저장 횟수를 세는 변수
let result = -1;         // K번째 저장되는 값을 저장할 변수

const tmp: number[] = new Array(N);  // 병합 시 사용할 임시 배열

/**
 * 병합 정렬의 본체 함수
 * @param arr 정렬할 배열
 * @param start 시작 인덱스
 * @param end 끝 인덱스
 */
function mergeSort(arr: number[], start: number, end: number): void {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);
    mergeSort(arr, start, mid);       // 좌측 정렬
    mergeSort(arr, mid + 1, end);     // 우측 정렬
    merge(arr, start, mid, end);      // 병합
  }
}

/**
 * 병합 함수
 * @param arr 정렬할 배열
 * @param start 시작 인덱스
 * @param mid 중간 인덱스
 * @param end 끝 인덱스
 */
function merge(arr: number[], start: number, mid: number, end: number): void {
  let i = start;
  let j = mid + 1;
  let t = 0;

  // 두 부분 배열을 병합
  while (i <= mid && j <= end) {
    if (arr[i] <= arr[j]) {
      tmp[t++] = arr[i++];
    } else {
      tmp[t++] = arr[j++];
    }
  }

  // 남은 원소 처리
  while (i <= mid) tmp[t++] = arr[i++];
  while (j <= end) tmp[t++] = arr[j++];

  // 병합된 결과를 원래 배열에 복사하며 저장 횟수를 셈
  i = start;
  t = 0;
  while (i <= end) {
    arr[i] = tmp[t++];
    saveCount++;
    if (saveCount === K) {
      result = arr[i];  // K번째 저장된 값을 기억
    }
    i++;
  }
}

// 병합 정렬 실행
mergeSort(A, 0, N - 1);

// 결과 출력
console.log(result);