// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력값 파싱
const [N, M] = input[0].split(" ").map(Number);
const prices = input.slice(1).map((line) => line.split(" ").map(Number));

// 패키지 및 낱개 최소 가격 찾기
let minPackage = Infinity;
let minSingle = Infinity;

for (let i = 0; i < M; i++) {
  const [pkg, single] = prices[i];
  minPackage = Math.min(minPackage, pkg);
  minSingle = Math.min(minSingle, single);
}

// 최소 비용 계산
const cost1 = Math.ceil(N / 6) * minPackage; // 패키지로만 구매
const cost2 = N * minSingle; // 낱개로만 구매
const cost3 = Math.floor(N / 6) * minPackage + (N % 6) * minSingle; // 패키지 + 낱개 조합

// 최솟값 출력
console.log(Math.min(cost1, cost2, cost3));