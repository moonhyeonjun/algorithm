const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require('fs').readFileSync(filePath).toString().split('\n');

let i = 0;

while (true) {
  const num = input[i].trim();
  if (num === '0') break;
  console.log(isPalindrome(num) ? 'yes' : 'no');
  i++;
}

function isPalindrome(num: string): boolean {
  const reversedNum = num.split('').reverse().join('');
  return num === reversedNum;
}