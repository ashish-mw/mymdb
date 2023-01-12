// basic data types

// const userName = 'Vijay'
// userName = 'Bob'
// console.log(userName)

// const user = {
//   name: 'Vijay',
//   className: 'X11'
// }
// // user.name = 'Bob'

// user = {
//   name: 'Bob',
//   className: 'X12'
// }

// console.log(user)

const users = [
  {
    name: "Vijay",
    className: "X11",
  },
  {
    name: "Bob",
    className: "X12",
  },
];

// for (let i=0; i<users.length; i++) {
//   const u = users[i];
//   const key = 'name'
//   console.log('user: ', u[key])
// }

// for (const u of users) {
//   console.log(u['name'])
// }

const newUser = {
  name: "Mally",
  className: "X13",
};

users.push(newUser);
// console.log(users)

// const newUsers = []
// for (const u of users) {
//   const newU = u;
//   newU.age = 5;
//   newUsers.push(newU)
// }
// console.log(newUsers)

function addAgeToUsers(userArray) {
  const newUsers = [];
  for (const u of userArray) {
    const newU = u;
    newU.age = 5;
    newUsers.push(newU);
  }
  return newUsers;
}

console.log("Before adding age ", users);
const agedUsers = addAgeToUsers(users);
console.log("After adding age ", agedUsers);
