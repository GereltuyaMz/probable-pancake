function checkLogin() {
  var user = firebase.auth().currentUser;
  if (!user) {
    window.location = "sign-in.html?a=" + Math.random();
    return;
  }
}
function signOut() {
  firebase
    .auth()
    .signOut()
    .catch(function (error) {
      alert(error.message);
    });
}
