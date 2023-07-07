let button = document.getElementById("button");

button.addEventListener("click", function (e) {
   e.preventDefault();

   let email = document.getElementById("email");
   let userEmail = localStorage.getItem("email");
   let error = document.getElementById("error");
   let wrong = document.getElementById("wrong");
   let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   let newPassword = document.getElementById("Npassword");
   let confirmPassword = document.getElementById("Cpassword");
   let password = document.getElementById("password");
   let Perror = document.getElementById("Perror");

   if (!email.value.match(emailPattern)) {
      wrong.style.display = "block";
      email.style.border = "1px solid red";
      setTimeout(() => {
         wrong.style.display = "none";
         email.style.border = "1px solid black";
      }, 3000);
   } else if (userEmail !== email.value) {
      error.style.display = "block";
      email.style.border = "1px solid red";
      setTimeout(() => {
         error.style.display = "none";
         email.style.border = "1px solid black";
      }, 3000);
   } else if (newPassword.value !== confirmPassword.value) {
      Perror.style.display = "block";
      password.style.border = "1px solid red";
      setTimeout(() => {
         Perror.style.display = "none";
         password.style.border = "1px solid black";
      }, 5000);
   } else {
      setTimeout(() => {
         localStorage.setItem("password", newPassword.value);

         window.location.replace("./todo.html");
      }, 2000);
   }
});
