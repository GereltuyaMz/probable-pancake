function showOwnPage(webName, imageURL, personalDash, pageCategory) {
    var pages = document.querySelector(".showPage");
    var pageContainer = document.querySelector(".show-page-container");

    var pageDiv = document.createElement('div');
    pageDiv.classList.add('used-website');
    pageDiv.setAttribute('data', pageCategory);

    var imageObj = document.createElement('img');
    imageObj.classList.add('img-box');

    var pageInput = document.createElement('div');
    // pageInput.setAttribute('href', 'link');
    pageInput.classList.add('page-input');

    var link = document.createElement('a');
    link.setAttribute('href', personalDash);
    pageDiv.appendChild(link);

    pageContainer.appendChild(pageDiv);
    link.appendChild(imageObj);
    pageDiv.appendChild(pageInput);

    imageObj.setAttribute('src', imageURL);

    pageInput.innerText = webName;
    return pageInput;
}

var database = firebase.database();

firebase.auth().onAuthStateChanged((user) => {

    if (user) {
        let uid = firebase.auth().currentUser.uid;
        let webNameRef = database.ref('pages/' + uid + '/');
        webNameRef.on('value', function (snapshot) {

            var webName = snapshot.val();
            for (a in webName) {
                var key;
                key = showOwnPage(webName[a].webName, webName[a].imageURL, webName[a].personalDash, webName[a].pageCategory);
                key.innerText = webName[a].webName;
            }
        });
    }
});
