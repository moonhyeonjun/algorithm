// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 문서와 검색 단어 추출
const doc: string = input[0];
const word: string = input[1];

// 중복되지 않게 단어 등장 횟수 계산 함수
function countNonOverlappingOccurrences(doc: string, searchWord: string): number {
    let count = 0; // 등장 횟수
    let position = 0; // 현재 탐색 위치

    while (position <= doc.length - searchWord.length) {
        // 단어가 발견되면
        if (doc.substring(position, position + searchWord.length) === searchWord) {
            count++;
            position += searchWord.length; // 중복되지 않게 다음 위치로 이동
        } else {
            position++; // 단어가 없으면 한 칸 이동
        }
    }

    return count;
}

// 함수 호출 및 결과 출력
const result = countNonOverlappingOccurrences(doc, word);
console.log(result);