// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 테스트 케이스 개수
const T: number = parseInt(input[0]);

// 결과 저장
const results: string[] = [];

// 연산 처리 함수
const calculateMarsMath = (formula: string): string => {
    // 수식 분리 (공백 기준)
    const tokens = formula.split(" ");
    
    // 첫 번째 값은 숫자 (초기값 설정)
    let result: number = parseFloat(tokens[0]);
    
    // 나머지는 연산자 처리
    for (let i = 1; i < tokens.length; i++) {
        const operator = tokens[i];
        if (operator === "@") {
            result *= 3;
        } else if (operator === "%") {
            result += 5;
        } else if (operator === "#") {
            result -= 7;
        }
    }
    
    // 소수점 둘째 자리까지 포맷팅
    return result.toFixed(2);
};

// 각 테스트 케이스 처리
for (let i = 1; i <= T; i++) {
    const formula = input[i];
    results.push(calculateMarsMath(formula));
}

// 결과 출력
console.log(results.join("\n"));