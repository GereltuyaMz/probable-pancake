function login() {
  var email = document.getElementById("login_user_id").value;
  var password = document.getElementById("login_user_pass").value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      window.location = "index.html?v=" + Math.random();
    })
    .catch(function (error) {
      alert(error.code + ":" + error.message);
    });
}
