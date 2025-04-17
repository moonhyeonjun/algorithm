// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split(" ");

const [X, Y] = input.map(Number);

// 현재 승률
const currentWinRate = Math.floor((Y * 100) / X);

// 승률이 99 이상이면 변하지 않음
if (currentWinRate >= 99) {
  console.log(-1);
} else {
  let left = 1;
  let right = 1_000_000_000;
  let answer = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const newWinRate = Math.floor(((Y + mid) * 100) / (X + mid));

    // 승률이 변화하면 mid가 정답 후보
    if (newWinRate > currentWinRate) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  console.log(answer);
}