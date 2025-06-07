// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 도시의 크기 N, 최대 선택할 치킨집 수 M
const [N, M] = input[0].split(" ").map(Number);

// 도시 맵 정보
const map: number[][] = input.slice(1).map(line => line.split(" ").map(Number));

// 집과 치킨집의 위치 정보를 저장할 배열
const houses: [number, number][] = [];
const chickens: [number, number][] = [];

// 지도 순회하며 집과 치킨집의 좌표 추출
for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    if (map[r][c] === 1) houses.push([r, c]);
    if (map[r][c] === 2) chickens.push([r, c]);
  }
}

// 조합 생성 함수 - 주어진 배열에서 m개를 뽑는 모든 조합 반환
function getCombinations<T>(arr: T[], m: number): T[][] {
  const result: T[][] = [];
  const dfs = (start: number, combo: T[]) => {
    if (combo.length === m) {
      result.push([...combo]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      combo.push(arr[i]);
      dfs(i + 1, combo);
      combo.pop();
    }
  };
  dfs(0, []);
  return result;
}

// 특정 조합의 치킨집들로 도시 치킨 거리 계산
function getCityChickenDistance(activeChickens: [number, number][]): number {
  let total = 0;
  for (const [hr, hc] of houses) {
    let minDist = Infinity;
    for (const [cr, cc] of activeChickens) {
      const dist = Math.abs(hr - cr) + Math.abs(hc - cc);
      if (dist < minDist) minDist = dist;
    }
    total += minDist;
  }
  return total;
}

// 가능한 모든 치킨집 조합에서 최소 도시 치킨 거리 찾기
const chickenCombos = getCombinations(chickens, M);
let minCityDistance = Infinity;

for (const combo of chickenCombos) {
  const distance = getCityChickenDistance(combo);
  if (distance < minCityDistance) minCityDistance = distance;
}

// 결과 출력
console.log(minCityDistance);