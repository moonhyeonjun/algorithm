// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 최대 사람 수를 계산하는 함수
function getMaxPassengers(data: string[]): number {
    let maxPassengers = 0; // 기차 안의 최대 인원 수
    let currentPassengers = 0; // 현재 기차 안의 인원 수

    for (let i = 0; i < data.length; i++) {
        const [off, on] = data[i].split(" ").map(Number); // 내린 사람 수와 탄 사람 수
        currentPassengers -= off; // 내린 사람 수 만큼 감소
        currentPassengers += on; // 탄 사람 수 만큼 증가
        maxPassengers = Math.max(maxPassengers, currentPassengers); // 최대 인원 수 갱신
    }

    return maxPassengers;
}

// 최대 사람 수 계산 및 출력
const result = getMaxPassengers(input);
console.log(result);