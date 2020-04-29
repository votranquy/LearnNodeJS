//init object
var Students = {
  AddStudents: function (name, age, classs) {
    this.name = name;
    this.age = age;
    this.class = classs;
  }
}

studentA = Students.AddStudents('Abert', 20, '9B');
console.log(studentA);