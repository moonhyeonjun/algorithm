// 입력 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

// 2진수를 8진수로 변환하는 함수
function binaryToOctal(binary: string): string {
  // 2진수의 길이를 3으로 나누어 떨어지지 않으면 앞에 0을 추가하여 3의 배수로 맞춤
  const paddingLength = (3 - (binary.length % 3)) % 3;
  const paddedBinary = '0'.repeat(paddingLength) + binary;
  
  let octal = '';

  // 3자리씩 끊어서 8진수로 변환
  for (let i = 0; i < paddedBinary.length; i += 3) {
    const threeBits = paddedBinary.slice(i, i + 3);
    const octalDigit = parseInt(threeBits, 2).toString(8);
    octal += octalDigit;
  }

  return octal;
}

// 결과 출력
console.log(binaryToOctal(input));