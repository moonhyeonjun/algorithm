// 입력값 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

// 한글 유니코드 값
const UNICODE_START = 44032;
const UNICODE_END = 55203;
const UNICODE_GAP = 11172;

// 유니코드 값 구하기
const unicode = input.charCodeAt(0) - UNICODE_START;

console.log(unicode + 1);