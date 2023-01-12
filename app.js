// function sayHello(salutation, username) {
//   let hUserName = "user";
//   let hSaltation = "Hello";
//   if (username) {
//     hUserName = username;
//   }
//   if (salutation) {
//     hSaltation = salutation;
//   }
//   console.log(hSaltation + " " + hUserName);
// }

// function sayHello(salutation, time, username) {
//   let hUserName = "user";
//   let hSaltation = "Hello";
//   let hTime = "9:00";
//   if (username) {
//     hUserName = username;
//   }
//   if (salutation) {
//     hSaltation = salutation;
//   }
//   if (time) {
//     hTime = time;
//   }
//   console.log(hSaltation + " " + hUserName + ". Time is " + hTime);
// }

// sayHello("", "meenatchi");
// sayHello("", "vijay");
// sayHello("", "kiruba");

// function sayHello(obj) {
//   console.log("obj = ", obj);
//   let hUserName = "user";
//   let hSaltation = "Hello";
//   let hTime = "9:00";
//   if (obj.username) {
//     hUserName = obj.username;
//   }
//   if (obj.salutation) {
//     hSaltation = obj.salutation;
//   }
//   if (obj.time) {
//     hTime = obj.time;
//   }
//   const line = `${hSaltation} ${hUserName}. Time is ${hTime}`;
//   // console.log(hSaltation + " " + hUserName + ". Time is " + hTime);
//   console.log(line);
// }

function sayHello({ username, salutation, time, day }) {
  let hUserName = "user";
  let hSaltation = "Hello";
  let hTime = "9:00";
  let hDay = "Someday";
  if (username) {
    hUserName = username;
  }
  if (salutation) {
    hSaltation = salutation;
  }
  if (time) {
    hTime = time;
  }

  if (day) {
    hDay = day;
  }

  const line = `${hSaltation} ${hUserName}. Day is ${hDay} Time is ${hTime}`;
  // console.log(hSaltation + " " + hUserName + ". Time is " + hTime);
  console.log(line);
}

sayHello({
  time: "8:00",
  day: "Monday",
  username: "meenatchi",
  salutation: "Good morning",
});
sayHello({
  time: "10:00",
  username: "vijay",
  salutation: "Good evening",
});
sayHello({
  time: "6:00",
  username: "kiruba",
  salutation: "Good afternoon",
  day: "Tuesday",
});
