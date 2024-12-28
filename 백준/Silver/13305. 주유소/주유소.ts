// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);  // 도시의 개수
const road = input[1].split(' ').map(Number);  // 도로 길이
const price = input[2].split(' ').map(Number);  // 주유소 가격

let totalCost = 0;
let currentPrice = price[0];  // 첫 번째 도시의 기름 가격으로 초기화

// 각 도로 구간을 순차적으로 처리
for (let i = 0; i < N - 1; i++) {
  if (price[i] < currentPrice) {
    currentPrice = price[i];  // 더 저렴한 가격으로 갱신
  }
  totalCost += currentPrice * road[i];  // 해당 구간을 이동하는 데 드는 비용
}

console.log(totalCost);  // 최소 비용 출력