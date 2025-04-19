// 파일 입력 처리
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 피연산자 개수
const N = parseInt(input[0]);

// 후위 표기식
const expression = input[1];

// 피연산자 값 입력 (A ~ Z에 매핑)
const values = input.slice(2, 2 + N).map(Number);
const operandMap = {};
for (let i = 0; i < N; i++) {
  const char = String.fromCharCode(65 + i); // 'A'의 ASCII는 65
  operandMap[char] = values[i];
}

// 계산을 위한 스택
const stack = [];

// 후위 표기식 순회하며 계산
for (const token of expression) {
  if (token >= 'A' && token <= 'Z') {
    // 피연산자인 경우: 해당 값을 스택에 push
    stack.push(operandMap[token]);
  } else {
    // 연산자인 경우: 스택에서 두 피연산자를 꺼내 계산
    const b = stack.pop();
    const a = stack.pop();
    let result = 0;

    switch (token) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        result = a / b;
        break;
    }

    // 결과를 다시 스택에 push
    stack.push(result);
  }
}

// 최종 결과를 소수점 둘째 자리까지 출력
console.log(stack[0].toFixed(2));