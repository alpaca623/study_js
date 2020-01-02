var report = {
  sum : 0,
  count : 0,
  add : function(){
    var args = Array.prototype.slice.call(arguments);
    args.forEach(function(entry){
      this.sum += entry;
      ++this.count;
    }, this) // 요기 this는 add 메서드를 호출한 this를 가리킨다.
    /**
     * this를 지정하지 않을 경우.. 
     * ==> args는 배열이기 때문에 this는 window(or global)로 지정된다.
     * 이런 경우를 대비해 thisArg를 인자로 받는 것.
     */
  },
  average : function(){
    return this.sum / this.count;
  }
}

report.add(80, 23, 12);
console.log(report.sum, report.count, report.average());