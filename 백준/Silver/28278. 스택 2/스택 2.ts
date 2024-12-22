// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 입력 데이터 처리
const N: number = parseInt(input[0]); // 명령의 수
const commands: string[] = input.slice(1); // 명령 리스트

// 스택과 출력 결과를 저장할 배열 초기화
const stack: number[] = [];
const results: string[] = [];

// 명령 처리
for (let i = 0; i < N; i++) {
  const command = commands[i].split(" "); // 명령어를 공백 기준으로 분리
  const action = parseInt(command[0]); // 명령 타입 추출

  switch (action) {
    case 1: // 1 X: 정수 X를 스택에 넣는다.
      const value = parseInt(command[1]);
      stack.push(value);
      break;

    case 2: // 2: 스택의 맨 위 정수를 빼고 출력. 비어있다면 -1 출력.
      if (stack.length > 0) {
        results.push(stack.pop()!.toString());
      } else {
        results.push("-1");
      }
      break;

    case 3: // 3: 스택에 들어있는 정수의 개수를 출력.
      results.push(stack.length.toString());
      break;

    case 4: // 4: 스택이 비어있으면 1, 아니면 0 출력.
      results.push(stack.length === 0 ? "1" : "0");
      break;

    case 5: // 5: 스택의 맨 위 정수를 출력. 비어있다면 -1 출력.
      if (stack.length > 0) {
        results.push(stack[stack.length - 1].toString());
      } else {
        results.push("-1");
      }
      break;
  }
}

// 결과 출력
console.log(results.join("\n"));