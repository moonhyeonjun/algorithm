// 입력 처리
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n").map(line => line.split(" ").map(Number));

const [N, K] = input[0];
const belt: number[] = input[1];
const robots: boolean[] = new Array(2 * N).fill(false); // 벨트 전체 크기만큼 로봇 배열
let stage = 0;

// 내구도 0인 칸 수 세기
const getZeroDurabilityCount = (): number => belt.filter(v => v === 0).length;

// 1. 벨트 + 로봇 회전
const rotate = () => {
  belt.unshift(belt.pop()!);
  robots.unshift(robots.pop()!);
  robots[N - 1] = false; // 내리는 위치는 무조건 비워야 함
};

// 2. 로봇 이동
const moveRobots = () => {
  for (let i = N - 2; i >= 0; i--) {
    if (!robots[i]) continue;
    if (!robots[i + 1] && belt[i + 1] > 0) {
      robots[i] = false;
      robots[i + 1] = true;
      belt[i + 1]--;
    }
  }
  robots[N - 1] = false; // 내리는 위치에서 로봇 내림
};

// 3. 로봇 올리기
const placeRobot = () => {
  if (belt[0] > 0 && !robots[0]) {
    robots[0] = true;
    belt[0]--;
  }
};

// 시뮬레이션 시작
while (getZeroDurabilityCount() < K) {
  stage++;
  rotate();        // 1단계: 회전
  moveRobots();    // 2단계: 로봇 이동
  placeRobot();    // 3단계: 로봇 올리기
}

console.log(stage);