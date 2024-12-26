// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 데이터 처리
const [n, m] = input[0].split(" ").map(Number); // 큐 크기 n과 뽑아낼 원소 개수 m
const targets = input[1].split(" ").map(Number); // 뽑아낼 원소의 위치 배열

// 초기 큐 생성 (1부터 n까지의 숫자)
const deque: number[] = Array.from({ length: n }, (_, i) => i + 1);

let totalOperations = 0; // 총 연산 횟수

// 뽑아낼 원소 순서대로 처리
for (const target of targets) {
  const targetIndex = deque.indexOf(target); // 현재 큐에서 뽑아낼 원소의 위치

  if (targetIndex === 0) {
    // 첫 번째 원소일 경우, 그냥 뽑아내기
    deque.shift();
    continue;
  }

  const leftMoves = targetIndex; // 왼쪽으로 이동하는 횟수
  const rightMoves = deque.length - targetIndex; // 오른쪽으로 이동하는 횟수

  if (leftMoves <= rightMoves) {
    // 왼쪽으로 이동하는 게 더 적은 경우
    totalOperations += leftMoves;
    for (let i = 0; i < leftMoves; i++) {
      deque.push(deque.shift()!); // 왼쪽으로 이동
    }
  } else {
    // 오른쪽으로 이동하는 게 더 적은 경우
    totalOperations += rightMoves;
    for (let i = 0; i < rightMoves; i++) {
      deque.unshift(deque.pop()!); // 오른쪽으로 이동
    }
  }

  deque.shift(); // 목표 원소 제거
}

// 결과 출력
console.log(totalOperations);