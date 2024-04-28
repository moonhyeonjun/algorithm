const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const [A, B] = [input[0], input[1]];

if(A < B){
    console.log('<');
} else if (A > B){
    console.log('>')
} else if (A == B){
    console.log('==')
}