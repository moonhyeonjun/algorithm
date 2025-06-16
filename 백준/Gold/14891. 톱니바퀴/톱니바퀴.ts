// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 톱니바퀴 상태 초기화
const gears: number[][] = input.slice(0, 4).map(line => line.split("").map(Number));

// 회전 정보 입력
const K = +input[4];
const rotations: [number, number][] = input.slice(5).map(line => {
  const [gearIdx, dir] = line.split(" ").map(Number);
  return [gearIdx - 1, dir]; // 0-indexed로 변환
});

/**
 * 특정 톱니바퀴를 지정된 방향으로 회전시키는 함수
 * @param gear 톱니바퀴 배열
 * @param dir 회전 방향 (1: 시계, -1: 반시계)
 */
function rotateGear(gear: number[], dir: number): number[] {
  if (dir === 1) {
    // 시계 방향 회전
    return [gear[7], ...gear.slice(0, 7)];
  } else {
    // 반시계 방향 회전
    return [...gear.slice(1), gear[0]];
  }
}

/**
 * 톱니바퀴 회전 로직 실행
 */
for (const [gearIdx, dir] of rotations) {
  const rotateDirs = Array(4).fill(0); // 각 톱니바퀴의 회전 방향 저장
  rotateDirs[gearIdx] = dir;

  // 왼쪽 방향 확인
  for (let i = gearIdx; i > 0; i--) {
    if (gears[i][6] !== gears[i - 1][2]) {
      rotateDirs[i - 1] = -rotateDirs[i];
    } else {
      break; // 극이 같으면 더 이상 전파되지 않음
    }
  }

  // 오른쪽 방향 확인
  for (let i = gearIdx; i < 3; i++) {
    if (gears[i][2] !== gears[i + 1][6]) {
      rotateDirs[i + 1] = -rotateDirs[i];
    } else {
      break;
    }
  }

  // 회전 실행
  for (let i = 0; i < 4; i++) {
    if (rotateDirs[i] !== 0) {
      gears[i] = rotateGear(gears[i], rotateDirs[i]);
    }
  }
}

/**
 * 점수 계산
 */
const score = gears.reduce((sum, gear, idx) => {
  return sum + (gear[0] === 1 ? Math.pow(2, idx) : 0);
}, 0);

console.log(score);