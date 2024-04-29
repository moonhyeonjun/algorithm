const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0].split('');
    let result = '';
    str.forEach((e) => {
        if(e === e.toUpperCase()) {
            result = result + e.toLowerCase();
        } else if (e === e.toLowerCase()) {
            result = result + e.toUpperCase();
        }
    })
    console.log(result);
});