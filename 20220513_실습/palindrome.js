//함수 isLuckyNumber 정의 (회문처럼 앞뒤가 똑같은지 여부 출력)

function isLuckyNumber(text) {
  let arr = text.split("");
  let bool = false;
  for (let i = 0; i < text.length / 2; i++) {
    if (arr[i] == arr[length - 1]) {
      bool = true;
    } else {
      bool = false;
      break;
    }
    return bool;
  }
}

function judgeBool(bool) {
  if (1) {
    return "It's a palindrome";
  } else {
    return "It's not a palindrome";
  }
}
let reText1 = isLuckyNumber("aspsa");
let reText2 = isLuckyNumber("aespa");
console.log(reText1);
console.log(reText2);
