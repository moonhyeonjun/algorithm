// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

type GuessInfo = {
  num: string;
  strike: number;
  ball: number;
};

const N = Number(input[0]);
const guesses: GuessInfo[] = input.slice(1).map((line) => {
  const [num, strike, ball] = line.split(" ").map(Number);
  return { num: num.toString(), strike, ball };
});

/**
 * 세 자리 숫자가 유효한지 검사 (1~9의 서로 다른 숫자)
 */
const isValidNumber = (num: string): boolean => {
  const digits = num.split("");
  const uniqueDigits = new Set(digits);
  return (
    num.length === 3 &&
    !digits.includes("0") &&
    uniqueDigits.size === 3
  );
};

/**
 * 스트라이크와 볼 계산
 */
const getStrikeAndBall = (target: string, guess: string): [number, number] => {
  let strike = 0, ball = 0;

  for (let i = 0; i < 3; i++) {
    if (target[i] === guess[i]) {
      strike++;
    } else if (target.includes(guess[i])) {
      ball++;
    }
  }

  return [strike, ball];
};

let possibleAnswerCount = 0;

// 가능한 모든 세 자리 수(123 ~ 987) 중 조건에 맞는 수 찾기
for (let i = 123; i <= 987; i++) {
  const candidate = i.toString();

  if (!isValidNumber(candidate)) continue;

  let isPossible = true;

  for (const { num, strike, ball } of guesses) {
    const [s, b] = getStrikeAndBall(candidate, num);
    if (s !== strike || b !== ball) {
      isPossible = false;
      break;
    }
  }

  if (isPossible) possibleAnswerCount++;
}

console.log(possibleAnswerCount);