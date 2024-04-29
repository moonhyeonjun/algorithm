function solution(nums) {
    var answer = 0;
    let select = nums.length / 2;
    let set = new Set(nums);
    let setLength = set.size;
    if (setLength > select) {
        answer = select;
    } else {
        answer = setLength;
    };
    return answer;
};