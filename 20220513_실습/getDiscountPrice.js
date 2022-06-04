// 함수 getDiscountPrice 정의
function getDiscountPrice(obj) {
  return obj.price * (1 - obj.rate);
}
let product = { name: "라면", price: 1000, rate: 0.2 };
let discountPrice = getDiscountPrice(product); //800
console.log(product.name + "의 할인된 가격은: " + discountPrice);
