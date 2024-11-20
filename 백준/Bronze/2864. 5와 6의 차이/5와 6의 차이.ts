// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split(" ");

// 입력된 두 수를 A와 B로 분리
const [A, B] = input;

// 최소값과 최대값 계산 함수
const getMinMaxSum = (a: string, b: string): [number, number] => {
  // 5를 6으로 바꿔 최대값을 계산
  const maxA = parseInt(a.replace(/5/g, "6"));
  const maxB = parseInt(b.replace(/5/g, "6"));

  // 6을 5로 바꿔 최소값을 계산
  const minA = parseInt(a.replace(/6/g, "5"));
  const minB = parseInt(b.replace(/6/g, "5"));

  // 두 수의 최소 합과 최대 합을 반환
  return [minA + minB, maxA + maxB];
};

// 결과 계산
const [minSum, maxSum] = getMinMaxSum(A, B);

// 결과 출력
console.log(minSum, maxSum);