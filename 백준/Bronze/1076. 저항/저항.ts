// 색상에 대한 값과 곱을 정의한 객체
const colorMap: { [key: string]: { value: number, multiplier: number } } = {
    black: { value: 0, multiplier: 1 },
    brown: { value: 1, multiplier: 10 },
    red: { value: 2, multiplier: 100 },
    orange: { value: 3, multiplier: 1000 },
    yellow: { value: 4, multiplier: 10000 },
    green: { value: 5, multiplier: 100000 },
    blue: { value: 6, multiplier: 1000000 },
    violet: { value: 7, multiplier: 10000000 },
    grey: { value: 8, multiplier: 100000000 },
    white: { value: 9, multiplier: 1000000000 }
};

// 입력 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 첫 번째와 두 번째 색상은 값, 세 번째 색상은 곱
const firstColor = input[0];
const secondColor = input[1];
const thirdColor = input[2];

// 저항 값 계산
const resistanceValue = colorMap[firstColor].value * 10 + colorMap[secondColor].value;
const resistanceMultiplier = colorMap[thirdColor].multiplier;
const result = resistanceValue * resistanceMultiplier;

// 결과 출력
console.log(result);