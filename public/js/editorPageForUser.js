const urlParams = new URLSearchParams(window.location.search);
const pageName = urlParams.get('page');


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        let uid = user.uid;
        var ref = db.ref('pages/' + uid + '/' + pageName + '/' + 'html');

        ref.once("value", function (snapshot) {
            document.getElementsByTagName('body')[0].innerHTML = snapshot.val();
            attachPageListeners();
        });
    } else {
        

    }
});


