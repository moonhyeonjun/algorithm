// 입력값 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();
const N: number = parseInt(input);

// 결과를 담을 배열 선언
let result: string[] = [];

// 별 찍기 로직
for (let i = 1; i <= N; i++) {
    // 각 줄에 필요한 공백과 별 생성
    let spaces = ' '.repeat(N - i);       // 공백 생성
    let stars = '* '.repeat(i).trim();    // 별 생성 후 마지막 공백 제거

    // 결과 배열에 추가
    result.push(spaces + stars);
}

// 결과 출력
console.log(result.join("\n"));