// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 데이터 파싱
const L: number = parseInt(input[0]); // 롤케이크 길이
const N: number = parseInt(input[1]); // 방청객 수
const requests: [number, number][] = input.slice(2).map((line) => {
  const [p, k] = line.split(" ").map(Number);
  return [p, k];
});

// 가장 많은 조각을 받을 것으로 기대한 방청객 찾기
let expectedMax = 0;
let expectedPerson = 0;

requests.forEach(([p, k], idx) => {
  const pieceCount = k - p + 1;
  if (pieceCount > expectedMax) {
    expectedMax = pieceCount;
    expectedPerson = idx + 1; // 방청객 번호는 1부터 시작
  }
});

// 롤케이크 분배 시뮬레이션
const cake: number[] = new Array(L + 1).fill(0);
const actualCounts: number[] = new Array(N + 1).fill(0);

requests.forEach(([p, k], idx) => {
  for (let i = p; i <= k; i++) {
    if (cake[i] === 0) {
      cake[i] = idx + 1; // 방청객 번호 할당
      actualCounts[idx + 1]++; // 실제 받은 조각 수 증가
    }
  }
});

// 실제로 가장 많은 조각을 받은 방청객 찾기
let actualMax = 0;
let actualPerson = 0;

for (let i = 1; i <= N; i++) {
  if (actualCounts[i] > actualMax) {
    actualMax = actualCounts[i];
    actualPerson = i;
  }
}

// 결과 출력
console.log(expectedPerson);
console.log(actualPerson);