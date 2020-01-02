var func = function(a,b,c,d){
  console.log(this, a,b,c,d);
}

var bindFunc = func.bind({x:1}, 4,5);

/*****************************
 * 함수 프로퍼티에 name 값이 있는걸 이제야 인지함..
 *****************************/

console.dir(func);
console.dir(bindFunc);