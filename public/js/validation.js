function validate() {
    clearError();
    checkLname();
    checkFname();
    hasNumber();
    checkEmail();
    confirmPass();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
        setEmailAndPassword();
        setTimeout(function () {
            window.location = "./sign-in.html?v=" + Math.random();
        }, 2000);
    }).catch(function (error) {
        alert(error.code + ' ' + error.message);

    });
}

// show erroriin turshilt
function showErrorFname(message) {
    var el = document.getElementById("errorText-fname");
    el.innerText = el.innerText +  message + "\n";
}
function showErrorLname(message) {
    var el = document.getElementById("errorText-lname");
    el.innerText = el.innerText +  message + "\n";
}
function showErrorPhone(message) {
    var el = document.getElementById("errorText-phone");
    el.innerText = el.innerText +  message + "\n";
}
function showErrorEmail(message) {
    var el = document.getElementById("errorText-email");

    el.innerText = el.innerText +  message + "\n";
}
function showErrorPass(message) {
    var el = document.getElementById("errorText-pass");

    el.innerText = el.innerText +  message + "\n";
}
function showErrorPass2(message) {
    var el = document.getElementById("errorText-confPass");

    el.innerText = el.innerText +  message + "\n";
}


function checkFname() {
    var el = document.getElementById("fname");
    var f = el.value;
    if (f.length == 0 || f.length > 50 ) {
        showErrorFname("* Нэрээ зөв оруулна уу!");
    }
}
function checkLname() {
    var el = document.getElementById("lname");
    var f = el.value;
    if (f.length == 0 || f.length > 50 ) {
        showErrorLname("* Овогоо зөв оруулна уу!");
    }
}
function showError(message) {
    var el = document.getElementById("errorText");

    el.innerText = el.innerText +  message + "\n";
}

function clearError() {
    var el = document.getElementById("errorText");
    el.innerText = "";
    var el1 = document.getElementById("errorText-fname");
    el1.innerText = "";
    var el2 = document.getElementById("errorText-lname");
    el2.innerText = "";
    var el3 = document.getElementById("errorText-phone");
    el3.innerText = "";
    var el4 = document.getElementById("errorText-email");
    el4.innerText = "";
    var el5 = document.getElementById("errorText-pass");
    el5.innerText = "";
    var el6 = document.getElementById("errorText-confpass");
    el6.innerText = "";
}

function hasNumber(message) {
    var el = document.getElementById("phone-number");
    var f = el.value;
    var n = "0123456789";
    var hasDigit = false;
    for (var i = 0; i < f.length; i++) {		
        var c = f.slice(i, i + 1);
        if (n.indexOf(c) > -1) {
            hasDigit = true;
        }
    }
    if (hasDigit == false) {
        showErrorPhone("* Утасны дугаараа шалгана уу!");
    }
}


function checkEmail(message) {
    var el = document.getElementById("email");
    var s = el.value;
    //var u = "QWERTYUIOPASDFGHJKLZXCVBNM";
    //var l = "qwertyuiopasdfghjklzxcvbnm";
    var a = "@";
    var n = "0123456789";
    var hasNumber = false;
    var hasUpper = false;
    var hasLower = false;
    var hasSign = false;
    for (var i = 0; i < s.length; i++) {		
        var c = s.slice(i, i + 1); 
        if (n.indexOf(c) > -1) {
            hasNumber = true;
        }

        if (a.indexOf(c) > -1) {
            hasSign = true;
        }
    }
    if (hasSign == false) {
        showErrorEmail("* Email хаягаа шалгана уу!");
    }
}
function confirmPass() {
    var el = document.getElementById("password");
    var p1 = el.value;
    var el = document.getElementById("confirm-password");
    var p2 = el.value;
    if(p1.length == 0) {
        showErrorPass("* Нууц үгээ оруулна уу!");
    }
    if (p1 != p2) {
        showError("* Нууц үг болон датсан нууц үг адил байх ёстойг анхаарна уу!");
    }
}