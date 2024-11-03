/**
 * 주어진 정수 N의 회전을 통해 나오는 모든 수의 합을 구하는 함수
 *
 * 회전은 N의 일의 자리 숫자를 떼어 맨 앞에 붙이는 과정을 통해 이루어지며,
 * 원래 수로 돌아올 때까지의 회전 결과들을 모두 더한 값을 반환합니다.
 *
 * @param N - 회전을 수행할 정수 N
 * @returns 회전한 결과값들의 합
 */
function rotateSum(N: number): bigint {
    const strN = N.toString();
    const len = strN.length;
    let rotated = strN;
    let totalSum = BigInt(0);

    for (let i = 0; i < len; i++) {
        // 회전된 수를 BigInt로 변환하여 합산
        totalSum += BigInt(rotated);

        // 문자열을 회전하여 다음 회전된 수 생성
        rotated = rotated[len - 1] + rotated.slice(0, len - 1);
    }

    return totalSum;
}

// 입력값 받기
const filePath: string = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input: string = require("fs").readFileSync(filePath).toString().trim();

// 입력값을 정수로 변환
const N: number = parseInt(input, 10);

// 회전된 모든 수의 합 계산 및 출력
console.log(rotateSum(N).toString());