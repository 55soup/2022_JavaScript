//함수 move정의
function move(dot, x, y) {
  return {
    x: dot.x + x,
    y: dot.y + y,
  };
  // let dot_x = x + p1.x;
  // let dot_y = y + p1.y;
  // let move_dot = { x: dot_x, y: dot_y };
  // return move_dot;
}
let p1 = { x: 0, y: 3 };
let p2 = move(p1, 2, 3);
console.log(p2);
