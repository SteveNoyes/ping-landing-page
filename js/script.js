function ValidateEmail(inputText) {
  // initialize
  let field = document.getElementById("femail");
  let error = document.getElementById("errorDiv");
  // regex pattern
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // else if match console.log 
  if(inputText.value.match(mailformat)) {
    field.classList.remove("err");
    error.innerHTML = "";
    // remove before deployment
    console.log("Valid email address");
  }   // if input empty return Whoops message 
  if(inputText.value = ' ') {
    field.classList.add("err");
    error.innerHTML = "Whoops! It looks like you forgot to add your email";
  }
    else {
    field.classList.add("err");
    error.innerHTML = "Please provide a valid email address";
  }
}