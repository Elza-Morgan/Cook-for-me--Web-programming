function loginform() {
  window.location.href = "loginform.html";
}
// This function is used to validate
function registerval() {
  var valid = true;
  var labels = document.getElementsByTagName("label");
  var UserName = document.registerform.UserName.value;
  // this if-condition is to cheack if it's empty, therefore it sends an error
  if (UserName == "") {
    labels[0].innerHTML = "UserName:* |This UserName is empty|";
    labels[0].style.color = "#c70039";
    valid = false;
  } else if (!isNaN(UserName)) {
    // this if-condition is used if the user typed in numbers it will pop-out error
    labels[0].innerHTML = "User Name:* |Must be in alphabets|";
    labels[0].style.color = "#ef4f4f";
    valid = false;
  } else {
    // else when the error is chnaged it will get back to normal
    labels[0].innerHTML = "User Name:*";
    labels[0].style.color = "#9ad3bc";
    valid = (valid) ? true : false;
    // if(valid){
    //   return true;
    // }else{
    //   return false;
    // }
  }
  var Password = document.registerform.Password.value;
  // this if-condition is to cheack if it's empty, therefore it sends an error
  if (Password == "") {
    labels[1].innerHTML = "Password:* |This Password is empty|";
    labels[1].style.color = "#c70039";
    valid = false;
  } else if (Password.length > 4) {
    // this if-condtion if it exceeded the length it will pop-out an error
    labels[1].innerHTML = "Password:* |Max Length is 4|";
    labels[1].style.color = "#ef4f4f";
    valid = false;
  } else {
    // else when the error is chnaged it will get back to normal
    labels[1].innerHTML = "Password:*";
    labels[1].style.color = "#9ad3bc";
    valid = (valid) ? true : false;
  }
  var Email = document.registerform.Email.value;
  var dot = Email.indexOf(".");
  var at = Email.indexOf("@");
  // this if-condition is to cheack if it's empty, therefore it sends an error
  if (Email == "") {
    labels[2].innerHTML = "Email:* |This Email is empty|";
    labels[2].style.color = "#c70039";
    valid = false;
  } else if (dot == -1 || at == -1 || dot < at) {
    // this if-condition means if dot or at or the order is wrong the error will not pop-out
    labels[2].innerHTML = "Email:* |Incorrect input|";
    labels[2].style.color = "#ef4f4f";
    valid = false;
  } else {
    // else when the error is chnaged it will get back to normal
    labels[2].innerHTML = "Email:*";
    labels[2].style.color = "#9ad3bc";
    valid = (valid) ? true : false;
  }
  var Age = document.registerform.Age.value;
  // this if-condtion is used if it's in alphabet, therefore it will pop-out an error
  if (isNaN(Age)) {
    labels[3].innerHTML = "Age: |Must be Digit|";
    labels[3].style.color = "#ef4f4f";
    valid = false;
  } else if (Age < 0 || Age > 100) {
    // this if-condition if it's out of the range then it will pop-out an error
    labels[3].innerHTML = "Age: |Must be within the range 0 to 100|";
    labels[3].style.color = "#ef4f4f";
    valid = false;
  } else {
    // else when the error is chnaged it will get back to normal
    labels[3].innerHTML = "Age:";
    labels[3].style.color = "#9ad3bc";
    valid = (valid) ? true : false;
  }
  var Phone = document.registerform.Phone.value;
  // this if-condition is to cheack if it's empty, therefore it sends an error
  if (Phone == "") {
    labels[4].innerHTML = "Phone:* |This Phone is empty|";
    labels[4].style.color = "#c70039";
    valid = false;
  } else if (isNaN(Phone)) {
    // this if-condtion is used if the field of phone is in alphabet
    labels[4].innerHTML = "Phone:* |Must be Digit|";
    labels[4].style.color = "#ef4f4f";
    valid = false;
  } else {
    // else when the error is chnaged it will get back to normal
    labels[4].innerHTML = "Phone:*";
    labels[4].style.color = "#9ad3bc";
    valid = (valid) ? true : false;
  }
  var Favorite_Food = document.registerform.Favorite_Food.value;
  // this if-condition is to cheack if it's empty, therefore it sends an error
  if (Favorite_Food == "") {
    labels[5].innerHTML = "Favorite Food:* |This Favorite Food is empty|";
    labels[5].style.color = "#c70039";
    valid = false;
  } else if (!isNaN(Favorite_Food)) {
    // this if condtion is used when the field is in numbers/digigts
    labels[5].innerHTML = "Favorite Food:* |Must be in alphabets|";
    labels[5].style.color = "#ef4f4f";
    valid = false;
  } else {
    // else when the error is chnaged it will get back to normal
    labels[5].innerHTML = "Favorite Food:*";
    labels[5].style.color = "#9ad3bc";
    valid = (valid) ? true : false;
  }
  return valid;
}
