var obj = {
  logThis : function(){
    console.log(this);
  },
  logThisLater : function(){
    setTimeout(this.logThis, 500);
  },
  logThisLater2 : function(){
    setTimeout(this.logThis.bind(this), 1000);
  }
}

obj.logThisLater();
obj.logThisLater2();