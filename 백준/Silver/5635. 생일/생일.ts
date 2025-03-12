// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 학생 수 n
const n: number = parseInt(input[0]);

// 학생 데이터 저장 (이름과 변환된 날짜)
type Student = { name: string; date: string };

const students: Student[] = input.slice(1).map((line) => {
  const [name, dd, mm, yyyy] = line.split(" ");
  return { 
    name, 
    date: `${yyyy.padStart(4, "0")}-${mm.padStart(2, "0")}-${dd.padStart(2, "0")}` // YYYY-MM-DD 포맷
  };
});

// 날짜 기준 오름차순 정렬 (오래된 날짜가 앞에 오도록 정렬)
students.sort((a, b) => a.date.localeCompare(b.date));

// 가장 나이 적은 사람 (마지막)
console.log(students[n - 1].name);

// 가장 나이 많은 사람 (첫 번째)
console.log(students[0].name);