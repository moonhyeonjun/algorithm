// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split(" ");

// 두 정수 A와 B를 입력받음
const A: bigint = BigInt(input[0]);
const B: bigint = BigInt(input[1]);

// 최대공약수(GCD)를 계산하는 함수 (유클리드 호제법)
const gcd = (x: bigint, y: bigint): bigint => {
    while (y !== BigInt(0)) {
        const temp = y;
        y = x % y;
        x = temp;
    }
    return x;
};

// 최소공배수(LCM) 계산
const lcm = (x: bigint, y: bigint): bigint => (x * y) / gcd(x, y);

// 결과 출력
console.log(lcm(A, B).toString());