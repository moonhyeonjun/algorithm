// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 참가자 수
const N: number = Number(input[0]);

// 최대 상금을 저장할 변수
let maxPrize: number = 0;

// 상금 계산 함수
const calculatePrize = (a: number, b: number, c: number): number => {
  if (a === b && b === c) {
    return 10000 + a * 1000;
  } else if (a === b || a === c) {
    return 1000 + a * 100;
  } else if (b === c) {
    return 1000 + b * 100;
  } else {
    return Math.max(a, b, c) * 100;
  }
};

// 각 참가자의 주사위 값 처리
for (let i = 1; i <= N; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  const prize = calculatePrize(a, b, c);
  if (prize > maxPrize) maxPrize = prize;
}

// 결과 출력
console.log(maxPrize);