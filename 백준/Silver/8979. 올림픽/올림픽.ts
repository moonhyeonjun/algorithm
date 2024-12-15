// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 첫 줄에서 국가 수와 등수를 알고 싶은 국가 K를 분리
const [N, K] = input[0].split(" ").map(Number);

// 국가별 메달 데이터를 처리
const countries = input.slice(1).map(line => {
  const [id, gold, silver, bronze] = line.split(" ").map(Number);
  return { id, gold, silver, bronze };
});

// 정렬 기준: 금 > 은 > 동
countries.sort((a, b) => {
  if (b.gold !== a.gold) return b.gold - a.gold; // 금메달 우선
  if (b.silver !== a.silver) return b.silver - a.silver; // 은메달 다음
  return b.bronze - a.bronze; // 동메달 마지막
});

// 등수 계산
let rank = 1; // 현재 등수
const ranks = new Array(N + 1).fill(0); // 국가별 등수를 저장할 배열

for (let i = 0; i < countries.length; i++) {
  if (i > 0) {
    // 이전 국가와 메달 수가 모두 같다면 동일 등수
    const prev = countries[i - 1];
    const curr = countries[i];
    if (
      prev.gold === curr.gold &&
      prev.silver === curr.silver &&
      prev.bronze === curr.bronze
    ) {
      ranks[curr.id] = ranks[prev.id];
    } else {
      rank = i + 1;
      ranks[curr.id] = rank;
    }
  } else {
    ranks[countries[i].id] = rank;
  }
}

// 결과 출력
console.log(ranks[K]);