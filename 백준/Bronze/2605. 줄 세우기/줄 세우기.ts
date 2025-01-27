// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 데이터 파싱
const n: number = parseInt(input[0]); // 학생 수
const numbers: number[] = input[1].split(" ").map(Number); // 각 학생이 뽑은 번호 배열

// 최종 결과를 저장할 배열
const result: number[] = [];

// 학생 번호를 1부터 n까지 순차적으로 처리
for (let i = 0; i < n; i++) {
    const currentNumber = numbers[i]; // 현재 학생이 뽑은 번호
    const studentNumber = i + 1; // 현재 학생의 번호 (1부터 시작)

    // 해당 번호만큼 앞자리에 삽입
    result.splice(result.length - currentNumber, 0, studentNumber);
}

// 결과 출력 (공백으로 구분)
console.log(result.join(" "));