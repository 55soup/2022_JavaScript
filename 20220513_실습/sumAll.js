// 함수 sumAll 정의
function sumAll(args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}

let result = sumAll([1, 2, 3]);
console.log(result);
