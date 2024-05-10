const selfNumber = Array(10001).fill(true);
let number = 0;

for (let i = 1; i <= 10000; i++) {
    number = i + (i + '').split('').reduce((acc, cur) => acc + parseInt(cur), 0);
    if (number <= 10000) {
        selfNumber[number] = false;
    }
}
    
for (let i = 1; i <= 10000; i++) {
    if (selfNumber[i]) {
        console.log(i);
    }
}