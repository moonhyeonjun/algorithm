// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);  // 기타의 개수
const serials = input.slice(1);  // 시리얼 번호 목록

/**
 * 시리얼 번호의 숫자 합을 계산하는 함수
 * @param serial - 시리얼 번호 문자열
 * @returns 숫자의 합
 */
const getDigitSum = (serial: string): number => {
  return serial
    .split('')
    .filter(char => !isNaN(Number(char)))  // 숫자인 문자만 필터링
    .reduce((sum, digit) => sum + Number(digit), 0);
};

/**
 * 시리얼 번호 정렬을 위한 비교 함수
 */
const compareSerial = (a: string, b: string): number => {
  // 1. 길이 비교
  if (a.length !== b.length) {
    return a.length - b.length;
  }

  // 2. 숫자의 합 비교
  const sumA = getDigitSum(a);
  const sumB = getDigitSum(b);
  if (sumA !== sumB) {
    return sumA - sumB;
  }

  // 3. 사전순 비교
  return a.localeCompare(b);
};

// 정렬 수행
serials.sort(compareSerial);

// 결과 출력
console.log(serials.join('\n'));