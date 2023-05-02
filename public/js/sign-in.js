const inputs = document.querySelectorAll(".input");

var selectedInput = null;

inputs.forEach((input) => {
  input.addEventListener("focus", function (e) {
    let parent = this.parentNode.parentNode;
    parent.classList.add("input-div-focus");
  });
  input.addEventListener("focusout", function (e) {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
      parent.classList.remove("input-div-focus");
    }
  });
});

function signIn() {
  var email = document.getElementById("login_user_id").value;
  var password = document.getElementById("login_user_password").value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      window.location = "../html/dashboard-page.html?v=" + Math.random();
    })
    .catch(function (error) {
      alert(error.code + ":" + error.message);
    });
}
