function nameSplit(name) {
  let nameSplited = name.split(" ");
  return {
    first: nameSplited[0],
    last: nameSplited[1],
  };
}
let name = "John Smith";
let s = nameSplit(name);
console.log(s);
