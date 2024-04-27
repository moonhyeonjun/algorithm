/* 문제: 수 정렬하기 2 / 분류: 정렬 */
const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).slice(1)

const solution = arr => {
    return arr.sort((a, b) => a - b).join("\n")
}

console.log(solution(input));