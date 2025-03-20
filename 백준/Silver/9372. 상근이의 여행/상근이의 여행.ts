// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 테스트 케이스 개수
const T: number = parseInt(input[0]);
let index = 1;
const results: number[] = [];

for (let t = 0; t < T; t++) {
  // 국가 수 N, 비행기 종류 M
  const [N, M] = input[index].split(" ").map(Number);
  index += M + 1; // M개의 비행기 정보를 건너뛰기

  // 최소한의 비행기 종류 = N - 1
  results.push(N - 1);
}

// 결과 출력
console.log(results.join("\n"));