

firebase.auth().onAuthStateChanged((user) => {

    if (user) {
        var urlParams = new URLSearchParams(window.location.search);
        var pageName = urlParams.get('page');
        let uid = user.uid

        let facebookRef = db.ref('pages/' + uid + '/' + pageName + '/' + 'social-links/facebook');
        facebookRef.on('value', function (snapshot) {

            document.querySelector('.facebookLink').href = snapshot.val();

        });

        let instagramRef = db.ref('pages/' + uid + '/' + pageName + '/' + 'social-links/instagram');
        instagramRef.on('value', function (snapshot) {

            document.querySelector('.instagramLink').href = snapshot.val();

        });

        let linkedinRef = db.ref('pages/' + uid + '/' + pageName + '/' + 'social-links/linkedin');
        linkedinRef.on('value', function (snapshot) {

            document.querySelector('.linkedinLink').href = snapshot.val();

        });

        let youtubeRef = db.ref('pages/' + uid + '/' + pageName + '/' + 'social-links/youtube');
        youtubeRef.on('value', function (snapshot) {

            document.querySelector('.youtubeLink').href = snapshot.val();

        });

    }
});
