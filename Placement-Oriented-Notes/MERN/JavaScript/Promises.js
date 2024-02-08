/**
 * A Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.
 *
 * A Promise can be in one of three states:
 * Pending: The initial state; the promise is neither fulfilled nor rejected.
 * Fulfilled: The operation completed successfully, and the promise has a resulting value.
 * Rejected: The operation failed, and the promise has a reason for the failure.
 */

/**
 *
 *
 * const myPromise = new Promise((resolve, reject) => {
 *     // Asynchronous operation (e.g., fetching data, reading a file)
 *     // If successful, call resolve with the result
 *     // If unsuccessful, call reject with an error
 *   });
 *
 *   myPromise.then((result) => {
 *     // Handle the fulfillment
 *   }).catch((error) => {
 *     // Handle the rejection
 *   });
 */

const myPromise = new Promise((resolve, reject) => {
  let number = Number(prompt("Enter a number: "));
  if (number > 0) {
    resolve("Promise resolved with " + number);
  } else {
    resolve("Promise rejected with " + number);
  }
});

myPromise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log("error", error);
  });

// create a promise that take a number if number is negative than promise reject otherwise resolve promise

// const myPromise2 = new Promise((resolve, reject) => {
//     const number = 10;
//     if (number < 0) {
//       reject(new Error("number is negative"));
//     } else {
//       resolve(number);
//     }
//   });
