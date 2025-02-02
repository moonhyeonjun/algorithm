// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split(" ");

const D: number = parseInt(input[0], 10);
const H: number = parseInt(input[1], 10);
const W: number = parseInt(input[2], 10);

// 비례 상수 k 계산
const k: number = D / Math.sqrt(H * H + W * W);

// 실제 높이와 너비 계산
const h: number = Math.floor(k * H);
const w: number = Math.floor(k * W);

// 결과 출력
console.log(h, w);