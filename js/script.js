function ValidateEmail(inputText) {
  // initialize local scope variables
  let field = document.getElementById("femail");
  let error = document.getElementById("errorDiv");
  // regex pattern
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // if inputText follows regex
  if(inputText.value.match(mailformat)) {
    // remove error class
    field.classList.remove("err");
  // else if inputText is empty
  } else if(inputText.value == '') {
    // add error class
    field.classList.add("err");
    // add error message
    error.innerHTML = "Whoops! It looks like you forgot to add your email";
  // else if inputText does not match regex 
  }else if(inputText.value != mailformat) {
    // add error class
    field.classList.add("err");
    // add error message
    error.innerHTML = "Please provide a valid email address";
  } 
}