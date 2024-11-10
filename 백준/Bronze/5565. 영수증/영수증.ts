// 입력값 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 총 가격과 9권의 가격을 입력 받기
const totalPrice: number = parseInt(input[0]);
const bookPrices: number[] = input.slice(1).map(Number);

// 9권의 책 가격을 모두 더함
const sumOfKnownPrices: number = bookPrices.reduce((acc, price) => acc + price, 0);

// 읽을 수 없는 책의 가격 계산
const missingBookPrice: number = totalPrice - sumOfKnownPrices;

// 결과 출력
console.log(missingBookPrice);