function validateForm() {
  var name = document.forms["signupForm"]["name"].value;
  var email = document.forms["signupForm"]["email"].value;
  var password = document.forms["signupForm"]["password"].value;

  if (name === "") {
    alert("Name cannot be empty");
    return false;
  }

  if (email === "") {
    alert("Email cannot be empty");
    return false;
  }

  if (password === "") {
    alert("Password cannot be empty");
    return false;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters long");
    return false;
  }
}
