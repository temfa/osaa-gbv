let token = window.sessionStorage.getItem("Auth Token");

window.addEventListener("load", () => {
  if (token === null) {
    window.location.href = "login.html";
  }
});
