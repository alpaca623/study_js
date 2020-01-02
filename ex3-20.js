var obj = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
};
// es6 추가 Array 메서드
// 유사배열객체를 배열로 반환시켜준다.
// detail - 순회 가능한 모든 종류의 데이터 타입을 배열로 전환
console.log(Array.from(obj));

