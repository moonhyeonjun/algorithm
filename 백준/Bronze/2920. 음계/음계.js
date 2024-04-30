const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

let prevNum;

input.forEach((num) => {
    if (prevNum === undefined) {
        prevNum = num;
    } else {
        if (prevNum + 1 === num) {
            prevNum = num;
        } else if (prevNum - 1 === num) {
            prevNum = num;
        } else {
            console.log('mixed');
            process.exit();
        }
    };
});
 
prevNum === 8 ? console.log('ascending') : console.log('descending');