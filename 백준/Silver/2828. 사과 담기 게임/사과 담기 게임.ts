// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 첫 번째 줄: 스크린 칸 수 N, 바구니 칸 수 M
const [N, M] = input[0].split(" ").map(Number);

// 두 번째 줄: 사과 개수 J
const J = Number(input[1]);

// 세 번째 줄부터 J줄: 사과가 떨어지는 위치
const apples: number[] = input.slice(2).map(Number);

// 바구니의 현재 위치 (왼쪽 끝 기준) 초기값은 1 (스크린 왼쪽에서 시작)
let basketLeft = 1;
// 바구니의 오른쪽 끝 위치
let basketRight = basketLeft + M - 1;

// 전체 이동 거리
let totalMove = 0;

for (const applePos of apples) {
  // 사과가 현재 바구니 범위 안에 떨어진 경우: 이동 필요 없음
  if (applePos >= basketLeft && applePos <= basketRight) {
    continue;
  }

  // 사과가 바구니 왼쪽에 떨어진 경우 → 바구니를 왼쪽으로 이동
  if (applePos < basketLeft) {
    const move = basketLeft - applePos;
    totalMove += move;
    basketLeft -= move;
    basketRight -= move;
  }

  // 사과가 바구니 오른쪽에 떨어진 경우 → 바구니를 오른쪽으로 이동
  else if (applePos > basketRight) {
    const move = applePos - basketRight;
    totalMove += move;
    basketLeft += move;
    basketRight += move;
  }
}

// 결과 출력
console.log(totalMove);