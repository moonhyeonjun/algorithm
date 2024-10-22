// 입력값 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();
const N: number = parseInt(input); // 원판의 개수

let result: string[] = []; // 결과를 저장할 배열
let moveCount: number = 0; // 이동 횟수 카운트

// 하노이 탑 재귀 함수
function hanoi(n: number, from: number, to: number, via: number): void {
  // 원판이 하나 남았을 때는 바로 옮김
  if (n === 1) {
    result.push(`${from} ${to}`);
    moveCount++;
    return;
  }

  // Step 1: n-1개의 원판을 보조 장대(via)로 이동
  hanoi(n - 1, from, via, to);
  
  // Step 2: 가장 큰 원판을 목적지로 이동
  result.push(`${from} ${to}`);
  moveCount++;

  // Step 3: 보조 장대(via)에 있는 n-1개의 원판을 목적지로 이동
  hanoi(n - 1, via, to, from);
}

// 하노이 탑 이동 실행
hanoi(N, 1, 3, 2);

// 결과 출력
console.log(moveCount); // 총 이동 횟수 출력
console.log(result.join("\n")); // 이동 과정 출력