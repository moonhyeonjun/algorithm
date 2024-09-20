const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

const octalToBinary = (octal: string): string => {
    let result: string = "";
    for (let i = 0; i < octal.length; i++) {
        let binary: string = parseInt(octal[i], 10).toString(2);
        if (i !== 0) {
            binary = binary.padStart(3, "0");
        }
        result += binary;
    }
    return result;
};

console.log(octalToBinary(input));