const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

function countSteelPieces(brackets: string): number {
    let stack: number[] = []; // 쇠막대기의 시작점을 기록할 스택
    let totalPieces: number = 0; // 잘려진 총 조각 수

    for (let i = 0; i < brackets.length; i++) {
        if (brackets[i] === '(') {
            stack.push(i); // 쇠막대기의 시작 또는 레이저의 시작점 저장
        } else {
            stack.pop(); // 쇠막대기의 끝 또는 레이저의 끝을 처리
            if (brackets[i - 1] === '(') {
                // 레이저를 만난 경우, 현재 스택에 쌓인 쇠막대기들의 수만큼 조각이 발생
                totalPieces += stack.length;
            } else {
                // 쇠막대기의 끝인 경우, 조각 하나를 추가
                totalPieces += 1;
            }
        }
    }

    return totalPieces;
}

console.log(countSteelPieces(input));