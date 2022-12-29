function loginform() {
  var username = document.LoginandSubButton.UserName.value;
  var password = document.LoginandSubButton.Password.value;

  if (username == "aast" && password == "123") {
    window.location.href = "afterlogin.html";
  } else {
    window.alert("username or password is incorrect");
  }
}

function registerfor() {
  window.location.href = "RegistrationForm.html";
}
