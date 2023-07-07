let button = document.getElementById("button");

button.addEventListener("click", function (e) {
   e.preventDefault();
   let email = document.getElementById("email");
   let password = document.getElementById("password");
   let Eerror = document.getElementById("Eerror");
   let Perror = document.getElementById("Perror");
   let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   let userEmail = localStorage.getItem("email");
   let userPassword = localStorage.getItem("password");

   if (!email.value.match(emailPattern)) {
      Eerror.style.display = "block";
      email.style.border = "1px solid red";
      setTimeout(() => {
         Eerror.style.display = "none";
         email.style.border = "1px solid black";
      }, 3000);
   } else if (userEmail !== email.value) {
      Eerror.style.display = "block";
      Eerror.innerText = "User does not exists";
      email.style.border = "1px solid red";
      setTimeout(() => {
         Eerror.style.display = "none";
         email.style.border = "1px solid black";
      }, 3000);
   } else if (password.value.length < 8) {
      Perror.style.display = "block";
      password.style.border = "1px solid red";
      setTimeout(() => {
         Perror.style.display = "none";
         password.style.border = "1px solid black";
      }, 3000);
   } else if (userPassword !== password.value) {
      Perror.style.display = "block";
      Perror.innerText = "User does not exists";
      password.style.border = "1px solid red";
      setTimeout(() => {
         Perror.style.display = "none";
         password.style.border = "1px solid black";
      }, 3000);
   } else {
      setTimeout(() => {
         window.location.replace("./todo.html");
      }, 3000);
   }
   {
   }
});

//   if (!email.value.match(emailPattern)) {s
//       Eerror.style.display = "block";
//         email.style.border = "1px solid red";
//       setTimeout(() => {
//          Eerror.style.display = "none";
//       }, 3000);

//   if (!email.value.match(emailPattern)) {

//   }

//   (userEmail !== email.value && userPassword !== password.value) {
//    Eerror.style.display = "block";
//    Perror.style.display = "block";
//    email.style.border = "1px solid red";
//    password.style.border = "1px solid red";
//    setTimeout(() => {
//       email.style.border = "1px solid black";
//       password.style.border = "1px solid black";
//    }, 5000);
// } else {
//    setTimeout(() => {
//       window.location.replace("http://127.0.0.1:5500/todo/index.html");
//    }, 3000);
// }

// });
