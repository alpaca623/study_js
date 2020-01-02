function Person(name, gender) {
  this.name = name;
  this.gender = gender;

  console.log(name, gender);
  console.log(this);
}

function Student(name, gender, school) {
  Person.call(this, name, gender);
  // Person 함수의 this를 Student 함수 객체로 변경한다.
  this.school = school;
}

function Employee(name, gender, company) {
  Person.apply(this, [name, gender]);
  this.company = company;
}

var hi = new Person('hello', 'male');
var two = new Student('hi', 'female', 'gg');
var three = new Employee('k', 'male', 'kk');

console.log(hi);
console.log(two);
console.log(three);