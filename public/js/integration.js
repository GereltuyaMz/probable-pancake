
var database = firebase.database();


function sendLinks() {
    firebase.auth().onAuthStateChanged((user) => {

        if (user) {
            var urlParams = new URLSearchParams(window.location.search);
            var pageName = urlParams.get('page');
            var facebookInput = document.querySelector('.facebook-link-input').value;
            var instagramInput = document.querySelector('.instagram-link-input').value;
            var linkedinInput = document.querySelector('.linkedin-link-input').value;
            var youtubeInput = document.querySelector('.youtube-link-input').value;
            let uid = user.uid


            let linkRef = database.ref('pages/' + uid + '/' + pageName + '/' + 'social-links');
            linkRef.set({ facebook: facebookInput, instagram: instagramInput, linkedin: linkedinInput, youtube: youtubeInput });

        





        }

    });
}



