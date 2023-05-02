
const db = firebase.database();
// const preloader = document.querySelector(".preloader");


function savePage() {
    var html = document.getElementsByTagName("body")[0].innerHTML;
    var selectEditableContent = document.querySelectorAll(
        ".select-editable-content"
    );



    var uid = firebase.auth().currentUser.uid;
    var urlParams = new URLSearchParams(window.location.search);
    var pageName = urlParams.get('page');
    var getwebName = db.ref('pages/' + uid + '/' + pageName + '/' + 'webName');

    getwebName.once('value', function (snapshot) {



        let ref = db.ref('pages/' + uid + '/' + pageName + '/' + 'html');
        ref.set(html);


    });



}

function loadPage() {
    // preloader.style.display = "block";
    var getwebName = db.ref('pages/' + uid + '/' + pageName + '/' + 'webName');
    getwebName.once('value', function (snapshot) {
        var uid = firebase.auth().currentUser.uid;
        var urlParams = new URLSearchParams(window.location.search);
        var pageName = urlParams.get('page');

        let ref = db.ref('pages/' + uid + '/' + pageName + '/' + 'html');

        ref.once("value", function (snapshot) {
            document.getElementsByTagName("body")[0].innerHTML = snapshot.val();
            // preloader.style.display = "none";
            attachPageListeners();
        });
    })

}

function uploadSelectedImage() {
    // preloader.style.display = "block";
    var image = document.getElementById('upload-image').files[0];
    var imageName = image.name;

    var storageRef = firebase.storage().ref('images/' + imageName);
    var uploadTask = storageRef.put(image);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {

        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;


        // preloader.style.display = "none";
    }, function (error) {


    }, function () {
        // successful upload
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {


            var backGroundImgChoice2 = document.querySelector(
                ".background-img-choices div:nth-child(2)"
            );
            var hasBackgroundImg = document.querySelectorAll(".has-background-img");

            backGroundImgChoice2.addEventListener("click", function (e) {
                hasBackgroundImg.forEach(function (item) {
                    item.style.backgroundImage = 'url(' + downloadURL + ')';
                });
            });

            backGroundImgChoice2.style.backgroundImage = 'url(' + downloadURL + ')';

        });
    });
}

// reservation write data
setTimeout(function () {
    let orderBtn = document.querySelector("#order-btn");
    orderBtn.addEventListener("click", function () {
        let uid = firebase.auth().currentUser.uid;
        let reserveName = document.querySelector("#reserve-name");
        let reservephone = document.querySelector("#reserve-phone");
        let people = document.querySelector("#table");
        let date = document.querySelector("#date");
        let time = document.querySelector("#time");
        var urlParams = new URLSearchParams(window.location.search);
        var pageName = urlParams.get('page');
        var orderRef = db.ref('pages/' + uid + '/' + pageName + '/' + 'order');

        orderRef.push({
            name: reserveName.value,
            phone: reservephone.value,
            people: people.value,
            date: date.value,
            time: time.value
        });

        reserveName.value = '';
        reservephone.value = '';
        people.value = '';
        date.value = '';
        time.value = '';
    });
}, 4000);

// Contact us write data
setTimeout(function () {
    let sendBtn = document.getElementsByClassName("send-btn")[0];
    sendBtn.addEventListener("click", function () {

        let uid = firebase.auth().currentUser.uid;
        let firstName = document.querySelector("#firstname");
        let email = document.querySelector("#email");
        let message = document.querySelector("#message");
        var urlParams = new URLSearchParams(window.location.search);
        var pageName = urlParams.get('page');
        var contactRef = db.ref('pages/' + uid + '/' + pageName + '/' + 'contact');

        contactRef.push({
            name: firstName.value,
            email: email.value,
            message: message.value
        });

        firstName.value = '';
        email.value = '';
        message.value = '';
    });
}, 3000);

