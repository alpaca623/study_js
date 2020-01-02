var numbers = [10, 20, 3, 42, 11];

/**
 * this를 지정할 필요가 없다.
 * 근데 거의 편법이네..
 */
var max = Math.max.apply(null, numbers);
var min = Math.min.apply(null, numbers);

console.log(max, min);