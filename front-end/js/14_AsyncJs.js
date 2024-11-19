//This code will output 1,2,3,4 each 1 sec interval between them
//This code demonistrate the call back hell or pyramid of doom, bad practice!
// setTimeout(() => {
//   console.log(1);
//   setTimeout(() => {
//     console.log(2);
//     setTimeout(() => {
//       console.log(3);
//       setTimeout(() => {
//         console.log(4);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//Old way of making ajax requestes
// var ajax = new XMLHttpRequest();
// ajax.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
// ajax.send();
// ajax.onreadystatechange = function () {
//   console.log(this.responseText);

// };

//Bad practice you still doing callback hell
// const response = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
//   (response) => {
//     console.log(response);
//     response.json().then((data) => console.log(data));
//   }
// );
// // console.log(response);

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch( e => console.log(e))
//   .finally( ()=> {console.log("Run if there is error or not")});

//   console.log(1)

//   const resp = fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const d = resp.json();

const x = () => console.log(2);
x();

//IIFE
(() => console.log(2))();
