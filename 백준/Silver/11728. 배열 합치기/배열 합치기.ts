// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력값 파싱
const [N, M]: number[] = input[0].split(" ").map(Number);
const arrayA: number[] = input[1].split(" ").map(Number);
const arrayB: number[] = input[2].split(" ").map(Number);

// 두 배열을 정렬된 상태로 병합
function mergeSortedArrays(arrayA: number[], arrayB: number[]): number[] {
  const result: number[] = [];
  let i = 0; // arrayA의 포인터
  let j = 0; // arrayB의 포인터

  // 두 포인터를 사용하여 배열 병합
  while (i < arrayA.length && j < arrayB.length) {
    if (arrayA[i] < arrayB[j]) {
      result.push(arrayA[i]);
      i++;
    } else {
      result.push(arrayB[j]);
      j++;
    }
  }

  // 남은 요소 추가
  while (i < arrayA.length) {
    result.push(arrayA[i]);
    i++;
  }
  while (j < arrayB.length) {
    result.push(arrayB[j]);
    j++;
  }

  return result;
}

// 배열 병합 후 결과 출력
const mergedArray: number[] = mergeSortedArrays(arrayA, arrayB);
console.log(mergedArray.join(" "));