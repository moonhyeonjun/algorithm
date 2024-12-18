// 파일 입력 및 초기 데이터 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 학생 수 및 데이터 파싱
const N: number = Number(input[0]); // 첫 번째 줄의 학생 수
const students: { name: string; korean: number; english: number; math: number }[] = input
  .slice(1) // 첫 번째 줄 제외
  .map((line) => {
    const [name, korean, english, math] = line.split(" "); // 공백 기준 분리
    return {
      name, // 이름
      korean: Number(korean), // 국어 점수
      english: Number(english), // 영어 점수
      math: Number(math), // 수학 점수
    };
  });

// 정렬 조건에 따라 정렬
students.sort((a, b) => {
  if (a.korean !== b.korean) {
    // 국어 점수 내림차순
    return b.korean - a.korean;
  }
  if (a.english !== b.english) {
    // 영어 점수 오름차순
    return a.english - b.english;
  }
  if (a.math !== b.math) {
    // 수학 점수 내림차순
    return b.math - a.math;
  }
  // 이름 사전순 오름차순 (대소문자 구분)
  return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
});

// 결과 출력
console.log(students.map((student) => student.name).join("\n"));