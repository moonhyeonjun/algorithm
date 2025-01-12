// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 첫 번째 줄은 데이터 세트의 수
const n: number = parseInt(input[0]);

// 결과 저장 배열
const results: string[] = [];

// 데이터 세트 순회
for (let i = 1; i <= n; i++) {
  const [X, Y] = input[i].split(" ").map(Number);
  
  // 조건에 따라 결과 추가
  if (X >= Y) {
    results.push("MMM BRAINS");
  } else {
    results.push("NO BRAINS");
  }
}

// 결과 출력
console.log(results.join("\n"));