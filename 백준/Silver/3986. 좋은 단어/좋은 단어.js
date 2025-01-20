// 파일 입력 및 초기 데이터 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 첫 번째 줄: 단어의 수 N
const N = parseInt(input[0]);

// 나머지 줄: 단어 리스트
const words = input.slice(1);

// '좋은 단어' 개수를 세는 함수
function countGoodWords(words) {
    let goodWordCount = 0;

    for (const word of words) {
        const stack = [];

        for (const char of word) {
            // 스택의 최상단 문자와 현재 문자가 같다면 pop
            if (stack.length > 0 && stack[stack.length - 1] === char) {
                stack.pop();
            } else {
                // 그렇지 않다면 push
                stack.push(char);
            }
        }

        // 스택이 비어 있으면 '좋은 단어'
        if (stack.length === 0) {
            goodWordCount++;
        }
    }

    return goodWordCount;
}

// 결과 출력
console.log(countGoodWords(words));