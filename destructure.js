// object destructuring

// const student = {
//   name: "Raj",
//   className: "X",
// };

// // const studentName = student["name"];
// // console.log(studentName);

// // const { name, className } = student;
// // console.log(name, className);

// const { name: studentName, className: studentClassName } = student;
// console.log(studentName, studentClassName);

// const students = ["Anne", "Marie"];

// const [a, b] = students;

// console.log("a", a);
// console.log("b", b);

// const students = [
//   {
//     name: "Raj",
//     className: "X",
//   },
//   {
//     name: "Bob",
//     className: "X",
//   },
// ];

// const [a, b] = students;

// console.log("a", a);
// console.log("b", b);

// const student = {
//   name: "Raj",
//   className: "X",
// };

// const newStudent = { ...student };
// newStudent.age = 34;

// console.log("old ", student);
// console.log("new ", newStudent);

// // const userName = "apple";
// // let newUserName = userName;
// // newUserName = "orange";

// // console.log("old ", userName);
// // console.log("new ", newUserName);

const students = [
  {
    name: "Raj",
    className: "X",
  },
  {
    name: "Mallika",
    className: "XII",
  },
];

const newStudents = [...students];
newStudents.push({
  name: "James",
  className: "IX",
});

console.log("old", students);
console.log("new", newStudents);
