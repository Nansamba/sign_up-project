// const setErrorFor = require("./main")
const loginForm = document.getElementById("login-form");
const email2 = document.getElementById("login-email");
const password3 = document.getElementById("password3");

let emailFromDb = "ngunajuliet@gmail.com"
function isEmail2(email2){
    if(email2 === emailFromDb) return true;
    else return false;
}

function isPassword3(password3){
    const pass2 = password && password2 ? true : false;
    return pass2
}

loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();
  
    validateLogin();
  });

  function validateLogin(){
    const email2Value = email2?.value.trim();
    const password3Value = password3.value.trim();
  
    if (email2Value === "") {
      setErrorFor(email2, "Email cannot be blank");
    } else if (!isEmail2(email2Value)) {
      setErrorFor(email2, "Email is not valid, only gmail allowed");
    } else {
      setSuccessFor(email2);
    }
  
    if (password3Value === "") {
      setErrorFor(password3, "password3 can not be blank");
    } else if (passwordValue !== password2Value && password3Value) {
      setErrorFor(password3, "incorrect password");
    } else {
      setSuccessFor(password3);
    }
  
  }
  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;
    formControl.className = "form-control error";
  }
  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
  }