// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력값 파싱
const [N, d, k, c] = input[0].split(" ").map(Number);
const dishes = input.slice(1).map(Number); // 벨트 위의 초밥 배열

// 초밥 종류를 카운팅할 Map (key: 초밥 번호, value: 해당 초밥 개수)
const sushiMap = new Map<number, number>();

let maxKind = 0; // 최대 종류 수

// 초기 슬라이딩 윈도우 (0 ~ k-1)
for (let i = 0; i < k; i++) {
  const s = dishes[i];
  sushiMap.set(s, (sushiMap.get(s) || 0) + 1);
}

// 쿠폰 초밥이 현재 윈도우에 없다면 1종류 추가로 먹을 수 있음
maxKind = sushiMap.has(c) ? sushiMap.size : sushiMap.size + 1;

// 슬라이딩 윈도우 순회 (i: 윈도우 시작 인덱스)
for (let i = 1; i < N; i++) {
  // 윈도우에서 빠지는 초밥
  const out = dishes[i - 1];
  sushiMap.set(out, sushiMap.get(out)! - 1);
  if (sushiMap.get(out) === 0) sushiMap.delete(out);

  // 윈도우에 새로 들어오는 초밥 (회전하므로 모듈로 연산)
  const inIdx = (i + k - 1) % N;
  const incoming = dishes[inIdx];
  sushiMap.set(incoming, (sushiMap.get(incoming) || 0) + 1);

  // 현재 윈도우 기준 종류 수 계산 (쿠폰 고려)
  const currentKinds = sushiMap.has(c) ? sushiMap.size : sushiMap.size + 1;
  maxKind = Math.max(maxKind, currentKinds);
}

// 결과 출력
console.log(maxKind);