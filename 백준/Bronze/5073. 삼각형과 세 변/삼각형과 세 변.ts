const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().split("\n");

let result: string[] = [];
let i: number = 0;

while (true) {
    const [a, b, c] = input[i].split(" ").map((item) => +item);
    if (a === 0 && b === 0 && c === 0) break;

    if (a + b <= c || a + c <= b || b + c <= a) {
        result.push("Invalid");
    } else if (a === b && b === c) {
        result.push("Equilateral");
    } else if (a === b || b === c || a === c) {
        result.push("Isosceles");
    } else {
        result.push("Scalene");
    }
    i++;
}

console.log(result.join("\n"));