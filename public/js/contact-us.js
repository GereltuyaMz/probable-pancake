
function recieve() {
    console.log('succes');
    var name = document.getElementById('name').value;

    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var db = firebase.database();
    var ref = db.ref('contactus/' + name);
    if (!email) {
        alert('И-мэйл ээ бичнэ үү'); 
    }
    if (!name) {
        alert('Нэрээ бичнэ үү')
    }
    // if (!name && !email){
    //     alert('И-мэйл болон нэрээ бичнэ үү'); 
    // }
     else {
        ref.set({email: email, message: message}).then(function() {
            document.getElementsByClassName("popup")[0].classList.add("active");
            }).catch(function(error) {
            });
            console.log('arrived');
        //  setTimeout(function () {
        //     window.location = "./index.html?v=" + Math.random();
        // }, 1000)
    }
    }
        document.getElementById("dismiss-popup-btn").addEventListener("click",function(){
        document.getElementsByClassName("popup")[0].classList.remove("active");
        }); 