//함수 pow정의
function pow(num, Indices) {
  let result = 1;
  for (let i = 0; i < Indices; i++) {
    result *= num;
  }
  return result;
}

let n = 10;
let r = pow(n, 2);
console.log(r);
