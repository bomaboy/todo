// function sayHi (){
//     alert("say hi")
// }
// window.sayHi();

// document.body.style.background = "gray";
// let input = document.getElementById("input");
// let paragraph = document.getElementById("para");
// let button = document.getElementById("button");
// let events = document.getElementById("events");
// let todo = document.getElementById("todo");
// let undo = document.getElementById("undo");
// let clear = document.getElementById("clear");

// let todoArr = [];

// button.addEventListener("click", function (e) {
//   e.preventDefault();
//   let todoDiv = document.createElement("div");
//   let heading = document.createElement("h1");
//   let cancelBtn = document.createElement("button");
//   todoDiv.appendChild(heading);
//   todoDiv.appendChild(cancelBtn);
//   heading.innerText = input.value;
//   cancelBtn.innerText = "X";
//   console.log(todoArr);

//   if (input.value !== "") {
//      todoArr.push(todoDiv);
//      input.style.border ="none"
//     todoArr.map((item, index) => {
//        todo.appendChild(item);

// cancelBtn.addEventListener("click", function (e) {
//    todoDiv.remove();
// }

//        cancelBtn.onclick = function () {
//           item.style.display = "none";
//           let indexes = todoArr[index];
//           console.log(index);
//           undo.onclick = function () {
//              if (undo.innerText === "Undo") {
//                 undo.innerText = "Redo";
//              } else {
//                 undo.innerText = "Undo";
//              }
//              if (indexes.style.display === "flex") {
//                 indexes.style.display = "none";
//              } else {
//                 indexes.style.display = "flex";
//              }
//           };
//        };
//     });
//   } else {
//    input.style.border = "1px solid red";
//    alert("input must have a value");
//   }

//   input.value = "";
// });

// clear.onclick = function () {
//   location.reload();
// };

// });
// cancelBtn.addEventListener("click", function (e) {
//    todoDiv.style.display = "none";
// });

// document.addEventListener("click", function (e) {
//    e.preventDefault();
// todoArr.push(input.value);
// console.log(todoArr);
// input.value = "";

// if (input.value === "") {
//    paragraph.innerText = "";
// } else {
//    paragraph.innerText = `Hi ${input.value} welcome to our website`;
//    input.value = "";
// }
// });

// function eve() {
//    events.style.backgroundColor = "red";
// }

// function mouse() {
//    events.style.backgroundColor = "white";
// }

// function eve() {
//    events.style.backgroundColor = "red";
//    setTimeout(() => {
//  events.style.backgroundColor = "";
//    }, 3000);
// }

// function mouse() {
//    events.style.backgroundColor = "white";
// }

// document.body.style.display = "flex";
// document.body.style.justifyContent = "space-around";
// document.body.style.alignContent = "center";
// document.body.style.flexDirection = "column";
// document.body.style.height = "100vh";
// document.body.style.background = "blue";

//  events.style.height ="200px";
//  events.style.width ="200px";
//  events.style.border ="1px solid red";

let input = document.getElementById("input");
let paragraph = document.getElementById("para");
let button = document.getElementById("button");
let events = document.getElementById("events");
let todo = document.getElementById("todo");
let undo = document.getElementById("undo");
let clear = document.getElementById("clear");
let menu = document.getElementById("menu");
let sidebar = document.getElementById("sidebar");
let cancel = document.getElementById("cancel");
let dropdown = document.getElementById("dropdown");
let modal = document.querySelector(".modal");

function displayModal() {
   modal.style.display = "flex";
}

function removeModal() {
   modal.style.display = "none";
}

const deleteUser = () => {
   localStorage.clear();

   setTimeout(() => {
      window.location.replace("./index.html");
   }, 3000);
};

function logout() {
   setTimeout(() => {
      window.location.replace("./log_in.html");
   }, 5000);
}

window.addEventListener("scroll", function () {
   let nav = this.document.querySelector(".nav");
   let winPix = window.scrollY;
   if (winPix > 200) {
      nav.classList.add("fixed");
   } else {
      nav.classList.remove("fixed");
   }
});

// function enter() {
//    menu.innerText = "☰";
// }

// function out() {
//    menu.innerText = "|||";
// }

function opened() {
   sidebar.style.width = "300px";
}

function cancelled() {
   sidebar.style.width = "0px";
}

let todoArr = [];

button.addEventListener("click", function (e) {
   e.preventDefault();
   let todoDiv = document.createElement("div");
   let heading = document.createElement("h1");
   let cancelBtn = document.createElement("button");
   todoDiv.appendChild(heading);
   todoDiv.appendChild(cancelBtn);
   heading.innerText = input.value;
   cancelBtn.innerText = "X";
   console.log(todoArr);

   if (input.value !== "") {
      todoArr.push(todoDiv);
      input.style.border = "none";
      todoArr.map((item, index) => {
         todo.appendChild(item);

         cancelBtn.onclick = function () {
            item.style.display = "none";
            let indexes = todoArr[index];
            console.log(index);
            undo.onclick = function () {
               if (undo.innerText === "Undo") {
                  undo.innerText = "Redo";
               } else {
                  undo.innerText = "Undo";
               }
               if (indexes.style.display === "flex") {
                  todoArr.splice(index, 0, indexes);
                  indexes.style.display = "flex";
               } else {
                  indexes.style.display = "flex";
               }
            };
         };
      });
   } else {
      input.style.border = "1px solid red";
      alert("Input must have a value");
   }

   input.value = "";
});

clear.onclick = function () {
   location.reload();
};
