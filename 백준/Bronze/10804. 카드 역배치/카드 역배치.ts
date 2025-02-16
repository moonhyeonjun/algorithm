// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 1부터 20까지 오름차순으로 정렬된 카드 배열
const cards: number[] = Array.from({ length: 20 }, (_, i) => i + 1);

// 주어진 구간들을 순차적으로 처리
input.forEach((line) => {
  const [a, b] = line.split(" ").map(Number);

  // 해당 구간을 역순으로 변환
  const reversed = cards.slice(a - 1, b).reverse();

  // 원본 배열에 적용
  cards.splice(a - 1, b - a + 1, ...reversed);
});

// 결과 출력
console.log(cards.join(" "));