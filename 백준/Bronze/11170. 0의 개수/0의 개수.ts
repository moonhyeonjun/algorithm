// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 데이터 처리
const T: number = parseInt(input[0]); // 테스트 케이스 수
const testCases: [number, number][] = input.slice(1).map(line => {
    const [N, M] = line.split(" ").map(Number);
    return [N, M];
});

// 0의 개수를 계산하는 함수
function countZerosInRange(N: number, M: number): number {
    let count = 0;

    // N부터 M까지 반복하면서 숫자를 문자열로 변환 후 0의 개수를 셉니다.
    for (let i = N; i <= M; i++) {
        count += countZerosInNumber(i);
    }

    return count;
}

// 특정 숫자 내에 포함된 0의 개수를 계산하는 함수
function countZerosInNumber(num: number): number {
    return num.toString().split("").filter(char => char === "0").length;
}

// 결과 계산 및 출력
const results: number[] = testCases.map(([N, M]) => countZerosInRange(N, M));
console.log(results.join("\n"));