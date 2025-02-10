// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 멀티탭 개수 N
const N: number = Number(input[0]);

// 각 멀티탭의 플러그 개수 배열
const plugs: number[] = input.slice(1).map(Number);

// 플러그 계산 (모든 멀티탭의 플러그 수의 합 - (멀티탭 개수 - 1))
const maxComputers: number = plugs.reduce((sum, plug) => sum + plug, 0) - (N - 1);

// 결과 출력
console.log(maxComputers);