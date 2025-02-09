// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

/**
 * 주어진 수 x에 대해 첫 번째 숫자와 전체 자리수를 곱한 값을 반환하는 함수
 * @param x 문자열 형태의 숫자
 * @returns 변환된 숫자
 */
const F = (x: string): string => {
    const firstDigit = parseInt(x[0], 10); // 첫 번째 숫자
    const length = x.length; // 자리수
    return (firstDigit * length).toString();
};

/**
 * FA 수 판별 함수
 * @param x 초기 입력값 (문자열 형태의 숫자)
 * @returns "FA" | "NFA"
 */
const isFA = (x: string): string => {
    const seen = new Set<string>(); // 중복 검사를 위한 Set
    let current = x;

    while (!seen.has(current)) {
        seen.add(current); // 현재 값 저장
        current = F(current); // F 함수 수행

        if (seen.has(current)) {
            return "FA"; // 반복이 시작되면 FA 수
        }
    }
    return "NFA"; // 반복이 발생하지 않으면 NFA
};

// 결과 출력
console.log(isFA(input));