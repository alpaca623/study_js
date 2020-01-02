/**
 * this를 지정하는 방법
 * 함수로 호출할 시 this는 window(node-global)로 지정된다.
 * 이에 this값을 self, that 등의 변수에 지정하여 사용하곤 했는데
 * 그럴필요 없이 call, bind 메서드를 사용하면 간단하게 해결이 된다.
 */

// var obj = {
//   outer : function(){
//     console.log(this);
//     var innerFunc = function(){
//       console.log(this);
//     }
//     innerFunc();
//   }
// }

var obj = {
  outer : function(){
    console.log(this);
    var innerFunc = function(){
      console.log(this);
    }.bind(this);
    innerFunc();
  }
}

obj.outer();

