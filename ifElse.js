// let age =45;

// let markskiswa = 60;
// let markseng = 70;
// let markssci = 58;
// let marksgeo = 90;
// let marksliter = 77;
// let averageMarks =
//   (markskiswa + markseng + markssci + marksgeo + marksliter) / 5;

function myFunction() {
  let age = 20;
  let voteable = age < 18 ? "Too young" : "Old enough";

  return voteable;
}

// console.log(myFunction());

function secondfuntion() {
  let age = 5;
  let voteable;
  if (age < 18) {
    voteable = "too young";
  } else {
    voteable = "old enough";
  }
  return voteable;
}

console.log("age calculatorr===", secondfuntion());

function thirdFuntion() {
  //   let markskiswa = 60;
  //   let markseng = 70;
  //   let markssci = 58;
  //   let marksgeo = 90;
  //   let marksliter = 77;
  //   let averageMarks =
  //     (markskiswa + markseng + markssci + marksgeo + marksliter) / 5;
  let totalGrade = averageMarks < 100 ? "below average" : "above average";
  return totalGrade;
}
// console.log(thirdFuntion());

function fourthFuntion() {
  let totalGrade;

  if (averageMarks >= 80 && averageMarks <= 100) {
    totalGrade = "A";
  } else if (averageMarks >= 55 && averageMarks <= 77) {
    totalGrade = "B";
  } else if (averageMarks >= 33 && averageMarks <= 44) {
    totalGrade = "C";
  }

  return totalGrade;
}

// console.log(fourthFuntion());

function fiveFuntion() {
  let mon = 700;
  let tue = 800;
  let wed = 1000;
  let thur = 1200;
  let totalSalary = mon + tue + wed + thur;
  let income = totalSalary > 3000 ? "low income rate" : "high income rate";

  return income;
}
console.log(fiveFuntion());

function sixFuntion() {
  let hour = 40;
  var message = null;
  if (hour >= 6 && hour < 12) {
    message = "goodMorning";
  } else if (hour >= 12 && hour < 18) {
    message = "goodAfternoon";
  } else {
    message = "goodevening";
  }
  return message;
}
console.log(sixFuntion());

function seventhFuntion() {
  let employee = 3;
  let message;
  if (employee >= 2 && employee < 5) {
    message = "lessworkers";
  } else {
    employee >= 5 && employee < 10;
    message = "enoughwokers";
  }
  return message;
}
console.log(seventhFuntion());
