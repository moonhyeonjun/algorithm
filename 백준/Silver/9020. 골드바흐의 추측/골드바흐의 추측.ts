// 입력 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const MAX = 10000;

// 에라토스테네스의 체로 소수 구하기
const isPrime = new Array<boolean>(MAX + 1).fill(true);
isPrime[0] = isPrime[1] = false;

for (let i = 2; i * i <= MAX; i++) {
    if (isPrime[i]) {
        for (let j = i * i; j <= MAX; j += i) {
            isPrime[j] = false;
        }
    }
}

// 골드바흐 파티션 찾기 함수
function findGoldbachPartition(n: number): [number, number] {
    // 절반부터 탐색하여 두 소수의 차이가 가장 작은 것을 찾음
    for (let i = Math.floor(n / 2); i >= 2; i--) {
        if (isPrime[i] && isPrime[n - i]) {
            return [i, n - i];
        }
    }
    return [0, 0]; // 이론상 도달하지 않음
}

// 테스트 케이스 처리
const T = parseInt(input[0]);
for (let i = 1; i <= T; i++) {
    const n = parseInt(input[i]);
    const [prime1, prime2] = findGoldbachPartition(n);
    console.log(`${prime1} ${prime2}`);
}