// 입력값 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 숫자 배열로 변환
const hats: number[] = input.map(Number);

// 7개의 숫자 조합 찾기 (합이 100인 경우 출력)
function findSevenDwarfs(hats: number[]): number[] {
  const totalDwarfs = hats.length;

  // 9개 중 2개를 제외한 나머지 7개를 고르는 방식
  for (let i = 0; i < totalDwarfs; i++) {
    for (let j = i + 1; j < totalDwarfs; j++) {
      const remainingDwarfs = hats.filter((_, index) => index !== i && index !== j);
      const sum = remainingDwarfs.reduce((acc, cur) => acc + cur, 0);

      // 합이 100인 경우 찾음
      if (sum === 100) {
        return remainingDwarfs;
      }
    }
  }

  // 답이 항상 유일하므로 이 코드는 이론상 실행되지 않음
  throw new Error("No valid solution found");
}

// 정답 계산
const result = findSevenDwarfs(hats);

// 정답 출력
result.sort((a, b) => a - b).forEach((num) => console.log(num));