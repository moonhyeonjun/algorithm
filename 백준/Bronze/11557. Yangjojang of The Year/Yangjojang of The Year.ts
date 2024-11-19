// 입력값 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 테스트 케이스 수 가져오기
const T: number = parseInt(input[0]);
let index = 1; // 현재 읽는 입력의 인덱스
const results: string[] = []; // 결과를 저장할 배열

// 테스트 케이스 순회
for (let t = 0; t < T; t++) {
    // 각 테스트 케이스의 학교 수 가져오기
    const N: number = parseInt(input[index]);
    index++;

    // 가장 술 소비량이 많은 학교를 찾기 위한 변수
    let maxSchool = "";
    let maxConsumption = 0;

    // 학교 정보를 순회하며 최대 소비량의 학교 찾기
    for (let n = 0; n < N; n++) {
        const [school, consumptionStr] = input[index].split(" ");
        const consumption = parseInt(consumptionStr);
        index++;

        if (consumption > maxConsumption) {
            maxSchool = school;
            maxConsumption = consumption;
        }
    }

    // 결과 저장
    results.push(maxSchool);
}

// 결과 출력
console.log(results.join("\n"));