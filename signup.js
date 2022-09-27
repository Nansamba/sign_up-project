const signupForm = document.getElementById("signup-form");
const firstname = document.getElementById("FirstName");
const lastname = document.getElementById("LastName");
const email = document.getElementById("Email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


function isEmail(email) {
  if (email) {
    if (email.includes("@gmail.com")) return true;
    else return false;
  } else {
    return false;
  }
}


function isValid(password) {
  //capital letter
  // symbol
  //number

  const pswd = password.split();
  const hasUpperCase =
    pswd.filter((el) => el === el.toUpperCase()).length > 0 ? true : false;

  const hasNumber =
    pswd.filter((el) => typeof el === "number").length > 0 ? true : false;

  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  const hasSpecial = specialChars.test(password);

  const isLong = pswd.length > 7 ? true : false;
  const pass = hasUpperCase && hasNumber && hasSpecial && isLong ? true : false;
  return pass;
}

signupForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});


function checkInputs() {
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  
  if (firstnameValue === "") {
    setErrorFor(firstname, "first name cannot be blank");
  } else {
    setSuccessFor(firstname);
  }

  if (lastnameValue === "") {
    setErrorFor(lastname, "last name cannot be blank");
  } else {
    setSuccessFor(lastname);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid, only gmail allowed");
  } else {
    setSuccessFor(email);
  }

  
  if (passwordValue === "") {
    setErrorFor(password, "password cannot be blank");
  } else if (isValid(passwordValue) === false) {
    setErrorFor(password, "Password is not valid");
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "password2 can not be blank");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "passwords do not match");
  } else {
    setSuccessFor(password2);
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

