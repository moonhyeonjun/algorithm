// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

// 입력값 N을 기반으로 초기 카드 배열 생성
const array = Array.from({ length: +input }, (_, index) => index + 1); // 1부터 N까지 배열 생성
const narray: number[] = []; // 버린 카드 순서를 저장할 배열

// 카드가 모두 없어질 때까지 반복
while (array.length !== 0) {
    // 1. 맨 위 카드를 버림
    const topCard = array.shift()!;
    narray.push(topCard);

    // 2. 남은 카드가 있다면 맨 위 카드를 맨 아래로 이동
    if (array.length !== 0) {
        array.push(array.shift()!);
    }
}

// 결과 출력
console.log(...narray);