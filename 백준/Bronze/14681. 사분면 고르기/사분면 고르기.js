const input = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);

const [x, y] = input;

switch (true) {
  case x > 0 && y > 0:
    console.log(1);
    break;
  case x < 0 && y > 0:
    console.log(2);
    break;
  case x < 0 && y < 0:
    console.log(3);
    break;
  case x > 0 && y < 0:
    console.log(4);
    break;
};