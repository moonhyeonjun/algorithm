const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N: number = parseInt(input[0]);
const fileNameList: string[] = input.slice(1);

let result: string = "";

for (let i = 0; i < fileNameList[0].length; i++) {
    let isSame: boolean = true;
    for (let j = 1; j < N; j++) {
        if (fileNameList[j][i] !== fileNameList[j - 1][i]) {
            isSame = false;
            break;
        }
    }
    if (isSame) result += fileNameList[0][i];
    else result += "?";
}

console.log(result);