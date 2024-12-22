// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 첫 줄은 책의 개수, 나머지는 책 제목 리스트
const N: number = parseInt(input[0], 10);
const books: string[] = input.slice(1);

// 책 판매량을 저장할 맵
const bookCount: Map<string, number> = new Map();

// 각 책의 판매량 계산
books.forEach((book) => {
  bookCount.set(book, (bookCount.get(book) || 0) + 1);
});

// 판매량 기준 내림차순, 판매량이 같다면 사전순 기준 오름차순으로 정렬
const sortedBooks = Array.from(bookCount.entries()).sort((a, b) => {
  if (b[1] === a[1]) {
    return a[0].localeCompare(b[0]); // 사전순 정렬
  }
  return b[1] - a[1]; // 판매량 기준 정렬
});

// 가장 많이 팔린 책 출력
console.log(sortedBooks[0][0]);