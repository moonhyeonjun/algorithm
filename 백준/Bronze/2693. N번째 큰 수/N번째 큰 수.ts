// 입력 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 테스트 케이스 수 입력
const T: number = parseInt(input[0]);

// 결과를 담을 배열
let result: number[] = [];

// 각 테스트 케이스 처리
for (let i = 1; i <= T; i++) {
    // 배열 A를 숫자로 변환
    let A: number[] = input[i].split(' ').map(Number);

    // 배열을 내림차순 정렬 후 3번째 큰 값 추출
    A.sort((a, b) => b - a);
    
    // 3번째 큰 값 결과에 추가
    result.push(A[2]);
}

// 결과 출력
console.log(result.join('\n'));