const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let totalGrade: number = 0;
let totalCredit: number = 0;

for (let i = 0; i < input.length; i++) {
  const [subject, credit, grade] = input[i].split(" ");
  if (grade === "P") continue;
  totalCredit += Number(credit);
  totalGrade += Number(credit) * getGrade(grade);
}

console.log((totalGrade / totalCredit).toFixed(6));

function getGrade(grade: string): number {
  switch (grade) {
    case "A+":
      return 4.5;
    case "A0":
      return 4.0;
    case "B+":
      return 3.5;
    case "B0":
      return 3.0;
    case "C+":
      return 2.5;
    case "C0":
      return 2.0;
    case "D+":
      return 1.5;
    case "D0":
      return 1.0;
    case "F":
      return 0.0;
    default:
      return 0;
  }
}