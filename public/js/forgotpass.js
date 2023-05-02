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
 
var mailSent = false;
function resetPass() {
    var auth = firebase.auth();
    var emailAddress = document.getElementsByClassName("email")[0].value;

    auth.sendPasswordResetEmail(emailAddress).then(function() {
    mailSent = true;
    document.getElementsByClassName("popup")[0].classList.add("active");
    }).catch(function(error) {
    });
}
 
  document.getElementById("dismiss-popup-btn").addEventListener("click",function(){
  document.getElementsByClassName("popup")[0].classList.remove("active");
  });




  
