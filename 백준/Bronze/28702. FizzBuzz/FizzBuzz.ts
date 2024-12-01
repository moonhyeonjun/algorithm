// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// FizzBuzz 계산
for (let i = 0; i < input.length; i++) {
  const currentInput: string = input[i];

  // 숫자인 경우 처리
  if (!isNaN(Number(currentInput))) {
    const baseNum: number = parseInt(currentInput, 10); // 현재 숫자
    const nextNum: number = baseNum + 3 - i; // 다음 FizzBuzz 값을 계산

    // FizzBuzz 출력 조건
    if (nextNum % 3 === 0 && nextNum % 5 === 0) {
      console.log("FizzBuzz");
    } else if (nextNum % 3 === 0) {
      console.log("Fizz");
    } else if (nextNum % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(nextNum);
    }
    break; // 결과를 찾았으므로 종료
  }
}