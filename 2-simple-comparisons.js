const house1 = 'Gryffindor';
const house2 = 'Ravenclaw';

// console.log(house1.trim().length > house2.trim().length);

// let studentAge = prompt('How old are you?');

// if (studentAge >= 11) {
//   alert('Welcome to Hogwarts');
// } else {
//   alert('Come back next year!');
// }

const student1 = {
  name: 'Harry',
  age: 11,
  personalityStrength: 'bravery',
};

if (student1.age >= 11 && student1.personalityStrength === 'bravery') {
  student1.house = 'Gryffindor';
} else if (student1.personalityStrength === 'ambition') {
  student1.house = 'Slytherin';
} else if (student1.personalityStrength === 'intelligence') {
  student1.house = 'Ravenclaw';
} else if (student1.personalityStrength === 'loyalty') {
  student1.house = 'Hufflepuff';
} else {
  alert('Figure out your personality, young padawan.');
}

const currentHour = 8;

// const visitor = {
//   name: 'Ron',
//   role: 'student',
// };

const visitor = {
  name: 'Krummbein',
  role: 'pet',
};

if (visitor.role === 'student' && currentHour < 20) {
  alert('Welcome to the library!');
} else if (visitor.role === 'student' && currentHour >= 20) {
  alert('You should be in bed, young ' + visitor.name);
} else {
  alert(
    'You are not a student of Hogwarts, please leave. You are even a ' +
      visitor.role
  );
}
