// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

// 초기 나무 조각 배열
let woodPieces: number[] = input.split(" ").map(Number);

// 목표 상태
const target: number[] = [1, 2, 3, 4, 5];

// 위치를 스왑하고 출력하는 함수
function swapAndPrint(arr: number[], i: number, j: number): void {
  // 두 위치의 값을 교환
  [arr[i], arr[j]] = [arr[j], arr[i]];

  // 현재 배열 상태 출력
  console.log(arr.join(" "));
}

// 나무 조각 배열 정렬
while (woodPieces.join(" ") !== target.join(" ")) {
  // 인접한 두 숫자를 비교하며 스왑
  for (let i = 0; i < woodPieces.length - 1; i++) {
    if (woodPieces[i] > woodPieces[i + 1]) {
      swapAndPrint(woodPieces, i, i + 1);
    }
  }
}