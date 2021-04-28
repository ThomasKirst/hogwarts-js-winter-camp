const ROLE_STUDENT = 'student';

// Factory function (creates and returns an object)
function createStudent(name, age, personality) {
  return {
    name: name,
    age: age,
    personalityStrength: personality,
    role: ROLE_STUDENT,
    isGraduated: false,
  };
}

const student1 = createStudent('Harry', 11, 'bravery');
const student2 = createStudent('Hermine', 11, 'loyalty');
const student3 = createStudent('Malfoy', 11, 'ambition');

const student1WithHouse = assignStudentToHouse(student1);
const student2WithHouse = assignStudentToHouse(student2);
const student3WithHouse = assignStudentToHouse(student3);

console.log(student1WithHouse);
console.log(student2WithHouse);
console.log(student3WithHouse);

//checkAccessToLibrary(student2WithHouse, 22);

checkAccessToLibrary({ name: 'Krummbein', role: 'pet ' }, 22);

function checkAccessToLibrary(visitor, currentHour) {
  if (visitor.role === ROLE_STUDENT && currentHour < 20) {
    alert('Welcome to the library!');
  } else if (visitor.role === ROLE_STUDENT && currentHour >= 20) {
    alert('You should be in bed, young ' + visitor.name);
  } else {
    alert(
      'You are not a student of Hogwarts, please leave. You are even a ' +
        visitor.role +
        ', Goodbye ' +
        visitor.name
    );
  }
}

// Call by value (copies the variable)
// Call by reference (with objects)
function assignStudentToHouse(student) {
  if (student.age >= 11 && student.personalityStrength === 'bravery') {
    student.house = 'Gryffindor';
  } else if (student.personalityStrength === 'ambition') {
    student.house = 'Slytherin';
  } else if (student.personalityStrength === 'intelligence') {
    student.house = 'Ravenclaw';
  } else if (student.personalityStrength === 'loyalty') {
    student.house = 'Hufflepuff';
  } else {
    alert('Figure out your personality, young padawan.');
  }

  return student;
}
