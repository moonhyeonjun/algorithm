// 유클리드 호제법을 사용하여 최대공약수를 구하는 함수
const gcd = (a: number, b: number): number => {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
};

// 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 분수 A/B와 C/D의 분자, 분모 추출
const [a, b] = input[0].split(" ").map(Number); // 첫 번째 분수
const [c, d] = input[1].split(" ").map(Number); // 두 번째 분수

// 분수 합 계산: (A*D + C*B) / (B*D)
const numerator = a * d + c * b; // 새 분자
const denominator = b * d; // 새 분모

// 기약분수로 만들기 위해 최대공약수 계산
const divisor = gcd(numerator, denominator);

// 결과 출력 (기약분수 형태)
const simplifiedNumerator = numerator / divisor;
const simplifiedDenominator = denominator / divisor;
console.log(simplifiedNumerator, simplifiedDenominator);