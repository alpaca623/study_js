var obj1 = {
  outer : function(){
      console.log(this);	// obj1 - {outer}
      var innerFunc = function(){
          console.log(this);	// outer - {...?}
      }
      innerFunc();  // 이 때 호출되는 this는 window 객체
      
      var obj2 = {
          innerMethod:innerFunc
      };
      obj2.innerMethod();   // 이 때 호출되는 this는 obj2 - {outer}
  }
};
obj1.outer();

/* *******************************
 * this 바인딩 예제
 * - 함수 내부에 있는 this는 호출한 주체에 따라 각각 다른 결과를 나타낸다.
 * 함수 자체를 호출할 경우 - window, global객체가 this에 바인딩된다.
 * 함수 프로퍼티(메서드)로 호출한 경우, 호출한 객체가 this에 바인딩된다.
 ******************************* */