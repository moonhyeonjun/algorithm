const fs = require("fs");

// 파일 입력 및 초기 데이터 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

// 초기 문자열 및 명령어 입력 처리
const initialString = input[0]; // 초기 문자열
const commands = input.slice(2); // 명령어 목록

// 스택 두 개를 활용하여 커서 위치를 표현
const leftStack = [...initialString]; // 초기 문자열은 커서 왼쪽 스택에 저장
const rightStack = []; // 커서 오른쪽 스택

// 명령어 처리
commands.forEach(command => {
    const [cmd, char] = command.split(" ");

    switch (cmd) {
        case "L": // 커서를 왼쪽으로 이동
            if (leftStack.length > 0) {
                rightStack.push(leftStack.pop());
            }
            break;

        case "D": // 커서를 오른쪽으로 이동
            if (rightStack.length > 0) {
                leftStack.push(rightStack.pop());
            }
            break;

        case "B": // 커서 왼쪽 문자 삭제
            if (leftStack.length > 0) {
                leftStack.pop();
            }
            break;

        case "P": // 커서 왼쪽에 문자 추가
            leftStack.push(char);
            break;
    }
});

// 최종 문자열 구성 (왼쪽 스택 + 오른쪽 스택 역순)
const result = leftStack.concat(rightStack.reverse()).join("");
console.log(result);