// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split(" ");

// 입력 데이터 처리
const A: number = parseInt(input[0]);
const B: number = parseInt(input[1]);

// BFS를 활용한 풀이
function findMinOperations(A: number, B: number): number {
  // 큐 초기화
  const queue: [number, number][] = [[A, 1]]; // [현재 값, 연산 횟수]

  while (queue.length > 0) {
    const [current, operations] = queue.shift()!;

    // B에 도달한 경우 결과 반환
    if (current === B) return operations;

    // 두 가지 연산 수행
    const next1 = current * 2;
    const next2 = parseInt(current.toString() + "1");

    if (next1 <= B) queue.push([next1, operations + 1]);
    if (next2 <= B) queue.push([next2, operations + 1]);
  }

  // B에 도달할 수 없는 경우
  return -1;
}

// 결과 출력
console.log(findMinOperations(A, B));