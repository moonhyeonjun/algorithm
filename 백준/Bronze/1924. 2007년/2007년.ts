const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require('fs').readFileSync(filePath).toString().split(' ');

const [month, day]: number[] = input.map(Number);
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let totalDays = 0;

for (let i = 0; i < month - 1; i++) {
  totalDays += daysInMonth[i];
}
totalDays += day;
const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const dayOfWeek = daysOfWeek[totalDays % 7];

console.log(dayOfWeek);