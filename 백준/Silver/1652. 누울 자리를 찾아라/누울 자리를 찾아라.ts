// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N: number = parseInt(input[0]); // 방 크기
const room: string[][] = input.slice(1).map((line) => line.split(""));

let horizontal = 0;
let vertical = 0;

// 가로 방향 검사
for (let i = 0; i < N; i++) {
  let count = 0;
  for (let j = 0; j < N; j++) {
    if (room[i][j] === ".") {
      count++;
    } else {
      if (count >= 2) horizontal++;
      count = 0;
    }
  }
  if (count >= 2) horizontal++; // 마지막까지 빈 칸일 경우
}

// 세로 방향 검사
for (let j = 0; j < N; j++) {
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (room[i][j] === ".") {
      count++;
    } else {
      if (count >= 2) vertical++;
      count = 0;
    }
  }
  if (count >= 2) vertical++; // 마지막까지 빈 칸일 경우
}

console.log(`${horizontal} ${vertical}`);