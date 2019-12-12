var str = "abc def";

/* **********************************
 * call, apply 메서드를 사용하는 이유는..?
 * - 뭘까용?
 ********************************** */

// Array.prototype.push.call(str, ', pushed string');
/**
 * 이렇게 하면 this로 지정된 str에다가 push 함수를 사용할 수 있다.
 * str은 문자열로서 내부적으로 length property를 가진 '유사배열객체'이기 때문.
 * 하지만 에러를 뱉는 이유는 length가 수정이 불가한 프로퍼티이기 때문이다.(원본 문자열을 변경하지 못함)
 * 이를 무시하고 call, apply를 이용해 문자열에 push를 하는 방법은 없다..(?)
 */

Array.prototype.concat.call(str, "string");
// concat 참조 - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
console.log(Array.prototype.concat.call(str, "string"));
console.log(str); // abc def 당연하다..

Array.prototype.every.call(str, function(c) {
  return c !== " ";
});

console.log(
  Array.prototype.every.call(str, function(c) {
    return c !== " ";
  })
);

console.log(
  Array.prototype.some.call(str, function(c) {
    return c !== " ";
  })
);
