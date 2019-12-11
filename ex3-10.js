var obj = {
  outer: function() {
    console.log('outer 객체',this);
    var innerFunc1 = function() {
      console.log('window 객체', this);
    };
    innerFunc1();

    var self = this;  // outer 객체 자신?
    var innerFunc2 = function() {
      console.log('outer 객체', self);
    };
    innerFunc2();
  }
};
obj.outer();
