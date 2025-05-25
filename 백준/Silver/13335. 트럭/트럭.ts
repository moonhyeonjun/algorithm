// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [n, w, L] = input[0].split(" ").map(Number); // n: 트럭 수, w: 다리 길이, L: 최대하중
const trucks = input[1].split(" ").map(Number);    // 대기 중인 트럭 무게 배열

// 다리 상태를 시뮬레이션할 큐 생성 (길이 w를 유지)
const bridgeQueue: number[] = Array(w).fill(0); // 다리 위 상태 (트럭이 없으면 0)
let time = 0;         // 경과 시간
let totalWeight = 0;  // 현재 다리 위 트럭들의 무게 총합

while (trucks.length > 0 || totalWeight > 0) {
  time++; // 1초 경과

  // 다리에서 가장 오래된 트럭 제거 (시간 흐름에 따라 한 칸 전진)
  const exitedTruck = bridgeQueue.shift()!;
  totalWeight -= exitedTruck;

  // 다음 트럭이 올라갈 수 있는지 확인
  const nextTruck = trucks[0];
  if (nextTruck !== undefined && totalWeight + nextTruck <= L) {
    bridgeQueue.push(nextTruck);       // 트럭 다리에 진입
    totalWeight += nextTruck;          // 무게 갱신
    trucks.shift();                    // 대기열에서 제거
  } else {
    bridgeQueue.push(0); // 트럭이 못 올라오면 빈 자리 유지 (시간은 흐름)
  }
}

console.log(time);