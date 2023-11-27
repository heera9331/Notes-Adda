// promise and chaining

// let response = fetch("https://jsonplaceholder.typicode.com/users");

// response.then((data) => {
//   data
//     .json()
//     .then(function (jsonData) {
//       console.log(jsonData);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// });

function getNames(array) {
  let tmp = [];

  array.forEach((item)=>{
    tmp.push(item.name);
  })

  return tmp;

  // let tmp = array.map((item) => {
  //   return item.name;
  // });
  // return tmp;
}

let array = [
  { name: "heera", age: 21 },
  { name: "deepak", age: 26 },
  { name: "yogesh", age: 25 },
];

console.log(getNames(array));
