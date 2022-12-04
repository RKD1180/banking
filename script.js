const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const wrong = document.getElementById("wrong");
const head = document.getElementById("head");

loginBtn.addEventListener("click", function () {
  const loginMail = "hablu@gmail.com";
  const loginPass = "1234";
  const emailValiDator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.value.match(emailValiDator)) {
    if (loginMail == email.value && loginPass == password.value) {
      console.log("Login", email.value, password.value);
      head.style.display = "none";
      // window.location.href = "dailyCost.html";
    } else {
      wrong.innerText = "Wrong Email/Pass";
      console.log("Wrong Email/Pass", email.value, password.value);
    }
  } else {
    wrong.innerText = "Invalid Email";
  }
});
