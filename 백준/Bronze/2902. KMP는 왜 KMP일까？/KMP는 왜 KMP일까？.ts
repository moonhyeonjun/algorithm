// 입력 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

// 긴 이름을 짧은 형태로 변환하는 함수
function convertToShortName(longName: string): string {
    // 하이픈('-')으로 단어를 분리한 후, 각 단어의 첫 번째 글자(대문자)만 추출
    const shortName = longName.split('-').map(word => word[0]).join('');
    return shortName;
}

// 변환된 짧은 형태 이름 출력
console.log(convertToShortName(input));