// 파일 입력 처리
const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 5x5 빙고판 초기화
const board = input.slice(0, 5).map(line => line.split(" ").map(Number));
const calls = input.slice(5).flatMap(line => line.split(" ").map(Number));

// 숫자별 위치 맵핑
const position = new Map();
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        position.set(board[i][j], [i, j]);
    }
}

const marked = Array.from({ length: 5 }, () => Array(5).fill(false));
const checkBingo = () => {
    let count = 0;
    
    // 가로 & 세로 체크
    for (let i = 0; i < 5; i++) {
        if (marked[i].every(v => v)) count++; // 가로
        if (marked.every(row => row[i])) count++; // 세로
    }
    
    // 대각선 체크
    if ([0, 1, 2, 3, 4].every(i => marked[i][i])) count++;
    if ([0, 1, 2, 3, 4].every(i => marked[i][4 - i])) count++;
    
    return count;
};

for (let turn = 0; turn < calls.length; turn++) {
    const num = calls[turn];
    if (position.has(num)) {
        const [x, y] = position.get(num);
        marked[x][y] = true;
        if (checkBingo() >= 3) {
            console.log(turn + 1);
            break;
        }
    }
}