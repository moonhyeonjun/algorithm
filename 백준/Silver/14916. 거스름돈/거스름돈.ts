// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

// 입력값 처리
const n: number = parseInt(input);

// 최소 동전 개수를 계산하는 함수
function minCoins(n: number): number {
  // 초기 거스름돈이 1원이면 -1을 반환 (2원과 5원으로는 불가능)
  if (n < 2) return -1;

  let fiveCount = Math.floor(n / 5); // 최대한 5원으로 거슬러 줌

  while (fiveCount >= 0) {
    const remainder = n - fiveCount * 5; // 5원을 뺀 나머지 금액 계산

    if (remainder % 2 === 0) {
      // 나머지가 2원으로 나누어 떨어지면 성공
      return fiveCount + remainder / 2; // 총 동전 개수
    }

    // 5원 동전 개수를 하나 줄여 다시 시도
    fiveCount--;
  }

  // 끝까지 계산했는데 거슬러 줄 수 없는 경우
  return -1;
}

// 결과 출력
console.log(minCoins(n));