const filePath = process.platform === "linux" ? "/dev/stdin" : "run/input.txt";
const input = require('fs').readFileSync(filePath).toString();

function fibonacci(n: number) {
  let newArr = [0, 1]; 
 
  let fib = (n: number) => {
    if (n <= 1) { 
      return newArr[n]; 
    }
    if (newArr[n] !== undefined){ 
      return newArr[n]; 
    }
    newArr[n] = fib(n - 1) + fib(n - 2);
    return newArr[n];
  };
  
  return fib(Number(input)); 
}

console.log(fibonacci(Number(input)));