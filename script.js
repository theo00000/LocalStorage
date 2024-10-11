let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");
let admin = document.getElementById("admin");
let basic = document.getElementById("basic");
let loginButton = document.getElementById("loginButton");
let logoutButton = document.getElementById("logoutButton");

admin.style.display = "none";
basic.style.display = "none";
logoutButton.style.display = "none";

function onLogin() {
  localStorage.setItem("username", "usernameInput.value");
  logoutButton.style.display = "block";

  if (usernameInput.value == "admin" && passwordInput.value == "admin123") {
    localStorage.setItem("role", "admin");
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "none";
    basic.style.display = "none";
    admin.style.display = "block";
  } else {
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "none";
    localStorage.setItem("role", "basic");
    admin.style.display = "none";
    basic.style.display = "block";
  }
}

if (localStorage.getItem("username")) {
  usernameInput.style.display = "none";
  passwordInput.style.display = "none";
  loginButton.style.display = "none";
  logoutButton.style.display = "block";
  if (localStorage.getItem("role") == "admin") {
    admin.style.display = "block";
    basic.style.display = "none";
  } else {
    admin.style.display = "none";
    basic.style.display = "block";
  }
}

function onLogout() {
  localStorage.clear();
  location.reload();
}
