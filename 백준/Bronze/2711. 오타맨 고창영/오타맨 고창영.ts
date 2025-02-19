// 파일 입력 처리
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string[] = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 테스트 케이스 개수
const T: number = parseInt(input[0], 10);
const results: string[] = [];

// 각 테스트 케이스 처리
for (let i = 1; i <= T; i++) {
    // 입력값 분리
    const [posStr, str] = input[i].split(" ");
    const pos: number = parseInt(posStr, 10); // 오타 위치 (1-based index)

    // 오타를 제외한 문자열 생성 (0-based index로 변환하여 처리)
    const correctedStr: string = str.slice(0, pos - 1) + str.slice(pos);

    // 결과 저장
    results.push(correctedStr);
}

// 결과 출력
console.log(results.join("\n"));