// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 테스트 케이스 개수
const T: number = parseInt(input[0]);

// 애너그램 판별 함수
const isAnagram = (a: string, b: string): boolean => {
  return a.split("").sort().join("") === b.split("").sort().join("");
};

// 결과 출력
const results: string[] = [];
for (let i = 1; i <= T; i++) {
  const [A, B] = input[i].split(" ");
  if (isAnagram(A, B)) {
    results.push(`${A} & ${B} are anagrams.`);
  } else {
    results.push(`${A} & ${B} are NOT anagrams.`);
  }
}

// 결과 출력
console.log(results.join("\n"));