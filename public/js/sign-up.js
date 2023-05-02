
var db = firebase.database();

function setEmailAndPassword() {
    var firstname = document.getElementById('fname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var phoneNumber = document.getElementById('phone-number').value;

    var db = firebase.database();
    var uid = firebase.auth().currentUser.uid;


    var ref = db.ref('users/' + uid);
    ref.set({ firstname: firstname, phoneNumber: phoneNumber, email: email, password: password });

    
}