// 삼각수를 계산하여 배열로 저장
function generateTriangularNumbers(limit: number): number[] {
    const triangularNumbers: number[] = [];
    let n = 1;
    while (true) {
        const triangular = (n * (n + 1)) / 2;
        if (triangular > limit) break;
        triangularNumbers.push(triangular);
        n++;
    }
    return triangularNumbers;
}

// 삼각수 3개의 합으로 표현 가능한지 확인
function isSumOfThreeTriangularNumbers(k: number, triangularNumbers: number[]): boolean {
    const len = triangularNumbers.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            for (let l = 0; l < len; l++) {
                if (triangularNumbers[i] + triangularNumbers[j] + triangularNumbers[l] === k) {
                    return true;
                }
            }
        }
    }
    return false;
}

// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: number[] = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);

// 테스트 케이스 개수 및 삼각수 생성
const testCaseCount: number = input[0];
const testCases: number[] = input.slice(1);
const triangularNumbers: number[] = generateTriangularNumbers(1000); // 문제 제한 3 ≤ K ≤ 1000

// 결과 계산 및 출력
const results: number[] = testCases.map(k => isSumOfThreeTriangularNumbers(k, triangularNumbers) ? 1 : 0);
console.log(results.join("\n"));