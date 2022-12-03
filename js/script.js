




function ValidateEmail(inputText) {
  // initialize
  let field = document.getElementById("femail");
  let error = document.getElementById("errorDiv");

  // regex pattern
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // if inputText matches the regex pattern
  // if(inputText.value.match(mailformat)) {
  //   field.classList.remove("err");
  //   error.innerHTML = "Whoops! It looks like you forgot to add your email";
  // }

  // if inputText is empty
  if(inputText.value == '') {
    // add error class
    field.classList.add("err");
    // add error message
    error.innerHTML = "Whoops! It looks like you forgot to add your email";

  } else if(inputText.value !== mailformat) {
    field.classList.remove("err");
    error.innerHTML = "Please provide a valid email address";
  } else {
    error.innerHTML = "You did it";
  }
}





