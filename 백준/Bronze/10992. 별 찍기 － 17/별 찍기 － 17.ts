// 입력값 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();
const N: number = parseInt(input);

// 별을 출력하는 함수
function printStars(N: number): void {
    // 첫 번째부터 N번째 줄까지 출력
    for (let i = 1; i <= N; i++) {
        // 1. 왼쪽 공백 추가 (N - i만큼)
        const leftPadding: string = ' '.repeat(N - i);
        
        // 2. 별과 공백을 교대로 배치한 줄 만들기
        let starLine: string = '';
        if (i === 1) {
            // 첫 번째 줄은 별 하나만
            starLine = '*';
        } else if (i === N) {
            // 마지막 줄은 별로 가득 채움
            starLine = '*'.repeat(2 * N - 1);
        } else {
            // 그 외 줄은 별과 공백을 교대로 배치
            starLine = '*' + ' '.repeat(2 * i - 3) + '*';
        }

        // 3. 공백 + 별 출력
        console.log(leftPadding + starLine);
    }
}

// 함수 호출
printStars(N);