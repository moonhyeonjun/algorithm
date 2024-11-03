// 입력값 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

// 총 높이를 계산하는 함수
function calculateBowlHeight(bowls: string): number {
  let height = 10; // 첫 번째 그릇의 높이는 10cm로 시작
  for (let i = 1; i < bowls.length; i++) {
    if (bowls[i] === bowls[i - 1]) {
      // 같은 방향으로 쌓였을 때
      height += 5;
    } else {
      // 반대 방향으로 쌓였을 때
      height += 10;
    }
  }
  return height;
}

// 결과 출력
console.log(calculateBowlHeight(input));