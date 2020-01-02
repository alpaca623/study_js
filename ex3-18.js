function a() {
  var argv = Array.prototype.slice.call(arguments);
  console.log(arguments);
  console.log(argv);
  argv.forEach(function (arg) {
    console.log(arg);
  });
}
a(1, 2, 3);