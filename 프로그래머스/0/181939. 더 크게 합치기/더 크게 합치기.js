function solution(a, b) {
    var answer = 0;
    let str1 = a.toString() + b.toString();
    let str2 = b.toString() + a.toString();
    if (str1 > str2) {
        answer = Number(str1);
    } else {
        answer = Number(str2);
    };
    return answer;
};