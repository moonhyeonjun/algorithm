// 입력 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 첫 번째 줄은 로프의 개수 N
const N: number = parseInt(input[0]);

// 두 번째 줄부터는 각 로프가 버틸 수 있는 최대 중량을 배열로 저장
const ropes: number[] = input.slice(1).map(Number);

// 로프들을 내림차순으로 정렬
ropes.sort((a, b) => b - a);

let maxWeight = 0;

// 각 로프를 사용할 때 최대 중량을 계산
for (let i = 0; i < N; i++) {
    // 현재 로프를 포함한 i+1개의 로프를 사용했을 때 들 수 있는 중량
    const currentWeight = ropes[i] * (i + 1);
    maxWeight = Math.max(maxWeight, currentWeight);
}

// 결과 출력
console.log(maxWeight);