

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
  module.exports = setErrorFor