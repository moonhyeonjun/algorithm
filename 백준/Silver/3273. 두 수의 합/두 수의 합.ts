// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// n개의 수열 크기
const n: number = parseInt(input[0]);

// 수열 데이터 처리
const numbers: number[] = input[1].split(" ").map(Number);

// 목표값 x
const targetSum: number = parseInt(input[2]);

// 결과 변수 초기화
let count: number = 0;

// 보조 자료구조로 사용될 Set
const numberSet: Set<number> = new Set();

// 수열 순회하며 조건 확인
for (const num of numbers) {
    // 타겟 값을 만들기 위해 필요한 값 계산
    const complement = targetSum - num;

    // 필요한 값이 Set에 존재하면 count 증가
    if (numberSet.has(complement)) {
        count++;
    }

    // 현재 값을 Set에 추가
    numberSet.add(num);
}

// 결과 출력
console.log(count);