// 입력 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

function minFlipCount(S: string): number {
  // 0과 1로 나뉘는 그룹을 카운트할 변수
  let countZeroGroup = 0;
  let countOneGroup = 0;

  // 첫 번째 문자의 그룹에 따라 초기화
  if (S[0] === "0") {
    countZeroGroup++;
  } else {
    countOneGroup++;
  }

  // 문자열을 순회하면서 그룹이 바뀔 때마다 카운트 증가
  for (let i = 1; i < S.length; i++) {
    if (S[i] !== S[i - 1]) {
      if (S[i] === "0") {
        countZeroGroup++;
      } else {
        countOneGroup++;
      }
    }
  }

  // 더 적은 그룹을 뒤집는 것이 최적
  return Math.min(countZeroGroup, countOneGroup);
}

console.log(minFlipCount(input));