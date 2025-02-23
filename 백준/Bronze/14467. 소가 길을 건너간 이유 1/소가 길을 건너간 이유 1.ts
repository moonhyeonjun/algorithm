// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N: number = Number(input[0]);
const cowPositions = new Map<number, number>(); // 소의 마지막 위치 저장
let count = 0; // 길을 건넌 횟수

for (let i = 1; i <= N; i++) {
  const [cow, position] = input[i].split(" ").map(Number);

  if (cowPositions.has(cow)) {
    if (cowPositions.get(cow) !== position) {
      count++; // 위치가 변하면 길을 건넘
    }
  }

  cowPositions.set(cow, position); // 소의 현재 위치 갱신
}

console.log(count);