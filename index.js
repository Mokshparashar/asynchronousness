// callback hell

// function step1(callback) {
//   setTimeout(() => {
//     console.log("first function");
//     callback();
//   }, 7000);
// }

// function step2(callback) {
//   setTimeout(() => {
//     console.log("second function");
//     callback();
//   }, 5000);
// }

// function step3(callback) {
//   setTimeout(() => {
//     console.log("third function");
//     callback();
//   }, 2000);
// }

// step1(function () {
//   step2(function () {
//     step3(function () {
//       console.log("say my name");
//     });
//   });
// });

// promises

// function step1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("first function");
//       resolve();
//     }, 7000);
//   });
// }

// function step2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("second function");
//       resolve();
//     }, 5000);
//   });
// }

// function step3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("third function");
//       resolve();
//     }, 2000);
//   });
// }

// step1()
//   .then(() => step2())
//   .then(() => step3())
//   .then(() => {
//     console.log("say my name");
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

//   async- await

function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("first function");
      resolve();
    }, 7000);
  });
}

function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("second function");
      resolve();
    }, 5000);
  });
}

function step3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("third function");
      resolve();
    }, 2000);
  });
}

async function executeSteps() {
  try {
    await step1();
    await step2();
    await step3();
    console.log("say my name");
  } catch (error) {
    console.log("Error:", error);
  }
}

executeSteps();

try {
} catch (error) {}
