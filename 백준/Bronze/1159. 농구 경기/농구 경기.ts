// 입력값 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 선수 수와 이름 목록을 파싱
const N: number = parseInt(input[0]);  // 선수의 수
const names: string[] = input.slice(1); // 각 선수의 성 리스트

// 선수 성의 첫 글자 빈도수 저장 객체 생성
const firstLetterCount: Record<string, number> = {};

// 선수들 첫 글자별로 카운트
for (const name of names) {
    const firstLetter = name[0]; // 첫 글자 추출
    if (firstLetterCount[firstLetter]) {
        firstLetterCount[firstLetter]++;
    } else {
        firstLetterCount[firstLetter] = 1;
    }
}

// 선발 가능한 성의 첫 글자만 모으기
const result: string[] = [];
for (const letter in firstLetterCount) {
    if (firstLetterCount[letter] >= 5) {
        result.push(letter);
    }
}

// 결과 출력
if (result.length === 0) {
    console.log("PREDAJA");
} else {
    // 사전순 정렬 후 출력
    console.log(result.sort().join(""));
}