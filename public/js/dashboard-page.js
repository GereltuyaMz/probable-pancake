let loader = document.getElementById("load");
var dash = document.querySelector(".dashboard-page");

dash.style.display = "none";
loader.classList.add("preloader");

setTimeout(() => {
    loader.classList.remove("preloader");
    dash.style.display = "block";
}, 2000);

function openContent(name) {
  // place "active" on each section
  var active = document.getElementsByClassName("active");
  for (var i = 0; i < active.length; i++) {
    active[i].style.display = "none";
  }
  // each section's id
  document.getElementById(name).style.display = "block";
}

var openTab = document.getElementById("firstTab");
openTab.click();

function validate() {


  let currentPassword = document.querySelector('#current-pwd').value;
  let newPassword = document.querySelector('#new-pwd').value;

  // !Set new password

  var user = firebase.auth().currentUser;

  user.updatePassword(newPassword).then(function () {
    var db = firebase.database();
    var uid = firebase.auth().currentUser.uid;


    var pwdRef = db.ref('users/' + uid + '/' + 'password/');
    pwdRef.set(newPassword);
    alert('Password changed successfully!');

  }).catch(function (error) {
    alert(error.message);

  });





}


function showDrop() {
  document.getElementById("dropdown").classList.toggle("show");
}

function showProfileInfo() {
  let userProfile = document.querySelector(".user-profile");
  let mainDashboard = document.querySelector(".main-dashboard");
  let newWebsiteContainer = document.querySelector('.new-website-container');
  let selectedWebsite = document.querySelector(".selected-website");

  if ((userProfile.style.display = "none")) {
    userProfile.style.display = "flex";
  } else {
    userProfile.style.display = "none";
  }
  if ((mainDashboard.style.display = "flex")) {
    mainDashboard.style.display = "none";
  } else {
    mainDashboard.style.display = "flex";
  }
  if ((newWebsiteContainer.style.display = "block")) {
    newWebsiteContainer.style.display = "none";
  } else {
    newWebsiteContainer.style.display = "block";
  }
  if ((selectedWebsite.style.display = "flex")) {
    selectedWebsite.style.display = "none";
  } else {
    selectedWebsite.style.display = "flex";
  }
}

// each new website's box
function openWebsiteForm() {
  let open = document.querySelector('.open');
  let newWebsiteContainer = document.querySelector('.new-website-container');

  open.style.display = "block";
  newWebsiteContainer.style.display = "none";
}

function showWebOps() {
  let newWebsiteContainer = document.querySelector('.new-website-container');
  let mainDashbaord = document.querySelector('.main-dashboard');
  let userProfile = document.querySelector(".user-profile");

  mainDashbaord.style.display = "none";
  newWebsiteContainer.style.display = "block";
  userProfile.style.display = "none";
}

// Feedback modal part
var feedbackBar = document.querySelector('#feedback-modal');
var feedbackModalContainer = document.querySelector('.feedback-modal-container');

feedbackBar.onclick = function () {
  feedbackModalContainer.style.display = "block";
}

window.onclick = function (event) {
  if (event.target == feedbackModalContainer) {
    feedbackModalContainer.style.display = "none";
  }
}

// !Send input.value data to firebase
var feedbackModalContainer = document.querySelector('.feedback-modal-container');
var feedbackBtn = document.querySelector("#feedback-btn");
var textArea = document.querySelector("#text-area");
var success = document.querySelector(".success");
var blankInput = document.querySelector("#blank");

var database = firebase.database();

feedbackBtn.addEventListener("click", function () {

  if (textArea.value.length == 0) {
    blankInput.innerText = "Энэ талбарыг заавал оруулах шаардлагатай.";
    feedbackModalContainer.style.display = "block";
    success.style.display = "none";
  }
  else if (textArea.value.length > 0) {
    let usersRef = database.ref('pages/' + 'comments/');

    // WRITE data to firebase 'comments/'
    usersRef.push({
      text: textArea.value
    });
    blankInput.remove();
    clearInputValue();
    setTimeout(function () { success.style.display = "none" }, 1000);
  }
});

function clearInputValue() {
  textArea.value = '';
  feedbackModalContainer.style.display = "none";
  success.style.display = "block";
}

// !Catch which type of website template did the user choose!

var boxContent = document.querySelectorAll('.box-content');
var openBtn = document.querySelector('#open-btn');

for (let i = 0; i < boxContent.length; i++) {
  boxContent[i].addEventListener('click', function (e) {

    //---------------Online shop template-----------------//
    if (e.target.classList.contains('online-shop-template')) {
      openBtn.addEventListener('click', function (e) {
        let uid = firebase.auth().currentUser.uid;
        let database = firebase.database();
        //------------Firebase -ees unshih/ READ------------//
        let getHTML = database.ref("templates/onlineshop/html");
        getHTML.once("value", function (snapshot) {
          let html = snapshot.val();


          //------------Firebase ruu bichih/ WRITE--------------//

          let webName = document.querySelector('#web-name').value;
          let pageCategory = 'Онлайн дэлгүүр';
          // let comment = document.kdlsmflkasm.value;
          var imgURL = 'https://firebasestorage.googleapis.com/v0/b/fir-ca083.appspot.com/o/images%2Fonlineshop.png?alt=media&token=973c40f8-0e85-4752-8eb8-5ed4f199a425';
          let pagesRef = database.ref('pages/' + uid + '/' + webName);
          let guestLink = '../html/guest-page-online-shop.html?page=' + encodeURI(webName);
          let editLink = '../html/editorPageForOnlineShop.html?page=' + encodeURI(webName);
          let personalDash = '../html/personal-dashboard-page.html?page=' + encodeURI(webName);

          pagesRef.set({ html: html, webName: webName, imageURL: imgURL, pageCategory: pageCategory, guestLink: guestLink, editLink: editLink, personalDash: personalDash });


          setTimeout(function () {
            let webName = document.querySelector('#web-name').value;

            window.location = '../html/personal-dashboard-page.html?page=' + encodeURI(webName);
          }, 1000);
        });
      });
    };

    //---------------Restaurant template-----------------//
    if (e.target.classList.contains('restaurant-template')) {
      openBtn.addEventListener('click', function (e) {
        let uid = firebase.auth().currentUser.uid;
        let database = firebase.database();
        //------------Firebase -ees unshih/ READ------------//
        let getHTML = database.ref("templates/restaurant/html");
        getHTML.once("value", function (snapshot) {
          let html = snapshot.val();


          //------------Firebase ruu bichih/ WRITE--------------//

          let webName = document.querySelector('#web-name').value;
          let pageCategory = 'Ресторан';
          // let comment = document.kdlsmflkasm.value;
          var imgURL = 'https://firebasestorage.googleapis.com/v0/b/fir-ca083.appspot.com/o/images%2Frestaurant.png?alt=media&token=1d6710ec-4393-4794-a675-0846e4cfd4af';
          let pagesRef = database.ref('pages/' + uid + '/' + webName);


          let guestLink = '../html/guest-page-restaurant.html?page=' + encodeURI(webName);

          let editLink = '../html/editorPageForRestaurant.html?page=' + encodeURI(webName);
          let personalDash = '../html/personal-dashboard-page.html?page=' + encodeURI(webName);

          pagesRef.set({ html: html, webName: webName, imageURL: imgURL, pageCategory: pageCategory, guestLink: guestLink, editLink: editLink, personalDash: personalDash });


          setTimeout(function () {
            let webName = document.querySelector('#web-name').value;

            window.location = '../html/personal-dashboard-page.html?page=' + encodeURI(webName);
          }, 1000);
        });
      });
    };

    //---------------Business template-----------------//
    if (e.target.classList.contains('business-template')) {
      openBtn.addEventListener('click', function (e) {
        let uid = firebase.auth().currentUser.uid;
        let database = firebase.database();
        //------------Firebase -ees unshih/ READ------------//
        let getHTML = database.ref("templates/business/html");
        getHTML.once("value", function (snapshot) {
          let html = snapshot.val();


          //------------Firebase ruu bichih/ WRITE--------------//

          let webName = document.querySelector('#web-name').value;
          let pageCategory = 'Бизнес';
          // let comment = document.kdlsmflkasm.value;
          let imgURL = 'https://firebasestorage.googleapis.com/v0/b/fir-ca083.appspot.com/o/images%2Fbusiness.png?alt=media&token=1b21476c-ce7a-4da2-bcce-fe27f8872e66';
          let pagesRef = database.ref('pages/' + uid + '/' + webName);

          let guestLink = '../html/guest-page-business.html?page=' + encodeURI(webName);

          let editLink = '../html/editorPageForBusiness.html?page=' + encodeURI(webName);
          let personalDash = '../html/personal-dashboard-page.html?page=' + encodeURI(webName);

          pagesRef.set({ html: html, webName: webName, imageURL: imgURL, pageCategory: pageCategory, guestLink: guestLink, editLink: editLink, personalDash: personalDash });


          setTimeout(function () {
            let webName = document.querySelector('#web-name').value;

            window.location = '../html/personal-dashboard-page.html?page=' + encodeURI(webName);
          }, 1000);
        });
      });
    };

    //---------------CV template-----------------//
    if (e.target.classList.contains('cv-template')) {
      openBtn.addEventListener('click', function (e) {
        let uid = firebase.auth().currentUser.uid;
        let database = firebase.database();
        //------------Firebase -ees unshih/ READ------------//
        let getHTML = database.ref("templates/cv/html");
        getHTML.once("value", function (snapshot) {
          let html = snapshot.val();


          //------------Firebase ruu bichih/ WRITE--------------//

          let webName = document.querySelector('#web-name').value;
          let pageCategory = 'CV';
          // let comment = document.kdlsmflkasm.value;
          var imgURL = 'https://firebasestorage.googleapis.com/v0/b/fir-ca083.appspot.com/o/images%2Fcv.png?alt=media&token=4595ec74-0746-49a0-aaf0-d7f9c02280d6';
          let pagesRef = database.ref('pages/' + uid + '/' + webName);
          let guestLink = '../html/guest-page-cv.html?page=' + encodeURI(webName);

          let editLink = '../html/editorPageForCV.html?page=' + encodeURI(webName);
          let personalDash = '../html/personal-dashboard-page.html?page=' + encodeURI(webName);

          pagesRef.set({ html: html, webName: webName, imageURL: imgURL, pageCategory: pageCategory, guestLink: guestLink, editLink: editLink, personalDash: personalDash });

          

          setTimeout(function () {
            let webName = document.querySelector('#web-name').value;

            window.location = '../html/personal-dashboard-page.html?page=' + encodeURI(webName);
          }, 1000);
        });
      });
    };

    //---------------Tourist template-----------------//
    if (e.target.classList.contains('tourist-template')) {
      openBtn.addEventListener('click', function (e) {
        let uid = firebase.auth().currentUser.uid;
        let database = firebase.database();
        //------------Firebase -ees unshih/ READ------------//
        let getHTML = database.ref("templates/tourist/html");
        getHTML.once("value", function (snapshot) {
          let html = snapshot.val();


          //------------Firebase ruu bichih/ WRITE--------------//

          let webName = document.querySelector('#web-name').value;
          let pageCategory = 'Жуулчины бааз';
          // let comment = document.kdlsmflkasm.value;
          var imgURL = 'https://firebasestorage.googleapis.com/v0/b/fir-ca083.appspot.com/o/images%2Ftravel.png?alt=media&token=5d923ebe-9132-4b4b-898e-0c870bf8b61b';
          let pagesRef = database.ref('pages/' + uid + '/' + webName);

          let guestLink = '../html/guest-page-tourist.html?page=' + encodeURI(webName);

          let editLink = '../html/editorPageForTourist.html?page=' + encodeURI(webName);
          let personalDash = '../html/personal-dashboard-page.html?page=' + encodeURI(webName);

          pagesRef.set({ html: html, webName: webName, imageURL: imgURL, pageCategory: pageCategory, guestLink: guestLink, editLink: editLink, personalDash: personalDash });

        

          setTimeout(function () {
            let webName = document.querySelector('#web-name').value;

            window.location = '../html/personal-dashboard-page.html?page=' + encodeURI(webName);
          }, 1000);
        });
      });
    };



  });
}


    //---------------Online shop template-----------------//






// !Create new website with firebase






