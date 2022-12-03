




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
  if(inputText.value = ' ') {
    field.classList.add("err");
    error.innerHTML = "Whoops! It looks like you forgot to add your email";
  } else {
    field.classList.add("err");
    error.innerHTML = "Please provide a valid email address";
  }
}





