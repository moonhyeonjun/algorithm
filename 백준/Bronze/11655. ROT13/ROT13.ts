const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().split(" ");

let result: string = "";

for (let i: number = 0; i < input.length; i++) {
  let str: string = input[i];
  let temp: string = "";

  for (let j: number = 0; j < str.length; j++) {
    if (str[j] >= "A" && str[j] <= "Z") {
      temp += String.fromCharCode(((str.charCodeAt(j) - 65 + 13) % 26) + 65);
    } else if (str[j] >= "a" && str[j] <= "z") {
      temp += String.fromCharCode(((str.charCodeAt(j) - 97 + 13) % 26) + 97);
    } else {
      temp += str[j];
    }
  }
  result += temp + " ";
}

console.log(result);