var str = 'abc def';

// var strc = Array.prototype.push.call(str, ', pushed string');

var a = Array.prototype.concat.call(str, ['string']);
console.log(a);

var b = Array.prototype.some.call(str, function (c) {
  return c === ' ';
})
console.log(b);

// str이 배열이 아니기 때문에, map 메서드를 사용할 수가 없다 - map is not a function 뜸
console.log(Array.prototype.map.call(str, function (o) {
  return o + "!";
}));

console.log(Array.prototype.reduce.apply(str, [function (string, char, i) {
  return string + char + i;
}, '']))