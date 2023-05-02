let loader = document.getElementById("load");
var personal = document.querySelector(".personal-dashboard-page");
var notification = document.querySelector('.notification-container');
var notifMsg = document.querySelector('.notification-msg');
var closeBtn = document.querySelector('.close-btn');
var notifStatus = false;




personal.style.display = "none";
loader.classList.add("preloader");


setTimeout(() => {
    loader.classList.remove("preloader");
    personal.style.display = "block";
}, 2000);

const urlParams = new URLSearchParams(window.location.search);
const pageName = urlParams.get('page');

var db = firebase.database();
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        let uid = user.uid;

        var refName = db.ref('pages/' + uid + '/' + pageName + '/' + 'webName');

        refName.once("value", function (snapshot) {
            document.querySelector('.info-name-value').innerText = snapshot.val();
        });
        var refImgURL = db.ref('pages/' + uid + '/' + pageName + '/' + 'imageURL');

        refImgURL.once("value", function (snapshot) {
            document.querySelector('.info-image-value').src = snapshot.val();


        });
        var refCategory = db.ref('pages/' + uid + '/' + pageName + '/' + 'pageCategory');

        refCategory.once("value", function (snapshot) {
            document.querySelector('.info-type-value').innerText = snapshot.val();
        });

        var refGuestLink = db.ref('pages/' + uid + '/' + pageName + '/' + 'guestLink');

        refGuestLink.once("value", function (snapshot) {
            document.querySelector('.info-link-value').innerText = snapshot.val();
            document.querySelector('.info-link-value').href = snapshot.val();

        });
        var refEditLink = db.ref('pages/' + uid + '/' + pageName + '/' + 'editLink');

        refEditLink.once("value", function (snapshot) {
            let editButton = document.querySelector('.edit-button');
            editButton.onclick = function () {
                window.open(snapshot.val());
            }

        });
    } else {
    }
});

function createOrderSection(id) {


    let dashboardRightB = document.querySelector(".dashboard-right-b");

    let orderSection = document.createElement('div');
    orderSection.classList.add('order-section');
    // section left
    let o = "";
    o = o + '<div class="section-left">' + '<i class="far fa-bell"></i>' + '<span>Захиалга</span>' + '</div>';
    orderSection.innerHTML = o;

    let faTimes = document.createElement('button');
    faTimes.className = "fas fa-times fa-lg closedBtnOrder";
    faTimes.setAttribute('data-id', id);
    // section right
    let sectionRight = document.createElement('div');
    sectionRight.classList.add('section-right');

    let name = document.createElement('div');
    name.classList.add('name');
    let nameText1 = document.createElement('div');
    nameText1.classList.add('name-text');
    nameText1.innerText = "Нэр:";
    let nameValue = document.createElement('div');
    nameValue.className = "name-value value";
    name.appendChild(nameText1);
    name.appendChild(nameValue);

    let phone = document.createElement('div');
    phone.classList.add('phone');
    let nameText2 = document.createElement('div');
    nameText2.classList.add('name-text');
    nameText2.innerText = "Утас:";
    let phoneValue = document.createElement('div');
    phoneValue.className = "phone-value value";
    phone.appendChild(nameText2);
    phone.appendChild(phoneValue);

    let people = document.createElement('div');
    people.classList.add('people');
    let nameText3 = document.createElement('div');
    nameText3.classList.add('name-text');
    nameText3.innerText = "Хүний тоо:";
    let peopleValue = document.createElement('div');
    peopleValue.className = "people-value value";
    people.appendChild(nameText3);
    people.appendChild(peopleValue);

    let date = document.createElement('div');
    date.classList.add('date');
    let nameText4 = document.createElement('div');
    nameText4.classList.add('name-text');
    nameText4.innerText = "Огноо:";
    let dateValue = document.createElement('div');
    dateValue.className = "date-value value";
    date.appendChild(nameText4);
    date.appendChild(dateValue);

    let time = document.createElement('div');
    time.classList.add('time');
    let nameText5 = document.createElement('div');
    nameText5.classList.add('name-text');
    nameText5.innerText = "Цаг:";
    let timeValue = document.createElement('div');
    timeValue.className = "time-value value";
    time.appendChild(nameText5);
    time.appendChild(timeValue);

    dashboardRightB.appendChild(orderSection)
    orderSection.appendChild(sectionRight);
    orderSection.appendChild(faTimes);
    sectionRight.appendChild(name);
    sectionRight.appendChild(phone);
    sectionRight.appendChild(people);
    sectionRight.appendChild(date);
    sectionRight.appendChild(time);

    return [nameValue, phoneValue, peopleValue, dateValue, timeValue];
}


function createFormMessageSection(id) {
    let dashboardRightA = document.querySelector(".dashboard-right-a");


    let formMessageSection = document.createElement('div');
    formMessageSection.classList.add('form-message-section');

    let h = "";
    h = h + '<div class="section-left">' + '<i class="far fa-envelope"></i>' + '<span>Форм мессеж</span>' + '</div>';
    formMessageSection.innerHTML = h;
    // <i class="fas fa-times"></i>
    let faTimes = document.createElement('button');
    faTimes.className = "fas fa-times fa-lg closedBtn";
    faTimes.setAttribute('data-id', id);


    let sectionRight = document.createElement('div');
    sectionRight.classList.add('section-right');

    let name = document.createElement('div');
    name.classList.add('name');
    let nameText1 = document.createElement('div');
    nameText1.classList.add('name-text');
    nameText1.innerText = "Нэр:";
    let nameValue = document.createElement('div');
    nameValue.className = "name-value value";
    name.appendChild(nameText1);
    name.appendChild(nameValue);

    let email = document.createElement('div');
    email.classList.add('email');
    let nameText2 = document.createElement('div');
    nameText2.classList.add('name-text');
    nameText2.innerText = "И-майл:";
    let emailValue = document.createElement('div');
    emailValue.className = "email-value value";
    email.appendChild(nameText2);
    email.appendChild(emailValue);

    let message = document.createElement('div');
    message.classList.add('message');
    let nameText3 = document.createElement('div');
    nameText3.classList.add('name-text');
    nameText3.innerText = "Мессеж:";
    let messageValue = document.createElement('div');
    messageValue.className = "message-value value";
    message.appendChild(nameText3);
    message.appendChild(messageValue);

    dashboardRightA.appendChild(formMessageSection)
    formMessageSection.appendChild(sectionRight);
    formMessageSection.appendChild(faTimes);
    sectionRight.appendChild(name);
    sectionRight.appendChild(email);
    sectionRight.appendChild(message);




    return [nameValue, emailValue, messageValue, faTimes, formMessageSection];
}
// Order section
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        let uid = user.uid;
        var getOrder = db.ref('pages/' + uid + '/' + pageName + '/' + 'order');

        getOrder.on("value", function (snapshot) {
            let orderInfo = snapshot.val();



            var order;

            let dashboardRightB = document.querySelector(".dashboard-right-b");
            dashboardRightB.innerHTML = '';
            let k = 0;
            for (k in orderInfo) {
                var order = createOrderSection(k);
                console.log(order);

                order[0].innerText = orderInfo[k].name;
                order[1].innerText = orderInfo[k].phone;
                order[2].innerText = orderInfo[k].people;
                order[3].innerText = orderInfo[k].date;
                order[4].innerText = orderInfo[k].time;
            }

            let closedBtnOrder = document.querySelectorAll('.closedBtnOrder');
            console.log(closedBtnOrder);


            for (let w = 0; w < closedBtnOrder.length; w++) {
                closedBtnOrder[w].addEventListener('click', function (e) {
                    let dataId = e.target.getAttribute('data-id');


                    let parent = e.target.parentElement;
                    parent.classList.add('fall');

                    parent.addEventListener('transitionend', function (e) {
                        let getDeleteOrder = db.ref('pages/' + uid + '/' + pageName + '/' + 'order/' + dataId);
                        getDeleteOrder.remove();
                    })
                })
            }


        });

        let closedBtnOrder = document.querySelectorAll('.closedBtnOrder');
        console.log(closedBtnOrder);


        for (let w = 0; w < closedBtnOrder.length; w++) {
            closedBtnOrder[w].addEventListener('click', function (e) {
                let dataId = e.target.getAttribute('data-id');

                console.log(dataId);



                let getDeleteOrder = db.ref('pages/' + uid + '/' + pageName + '/' + 'order/' + dataId);
                getDeleteOrder.remove();

            })
        }



        var getCount = db.ref('pages/' + uid + '/' + pageName + '/' + 'order');

        getCount.on("value", function (snapshot) {
            let orderCount = document.querySelector(".order-count");
            let ordernote = snapshot.val();
            let count1 = Object.keys(ordernote);
            orderCount.innerText = count1.length;
        });




    }
});



// contact section
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        let uid = user.uid;
        let getInput1 = db.ref('pages/' + uid + '/' + pageName + '/' + 'contact');



        getInput1.on("value", function (snapshot) {
            let conName = snapshot.val();


            var contact;

            let dashboardRightA = document.querySelector(".dashboard-right-a");
            dashboardRightA.innerHTML = '';
            let i = 0;
            for (i in conName) {
                var contact = createFormMessageSection(i);
                contact[0].innerText = conName[i].name;
                contact[1].innerText = conName[i].email;
                contact[2].innerText = conName[i].message;
            }



            notifStatus = true;

            if (notifStatus == true) {

                notifMsg.innerText = conName[i].name + ' форм мессеж илrээсэн байна!';
                notification.classList.remove('hide');
                notification.classList.add('show');
                notification.classList.add('showNotif');


            }
            setTimeout(() => {
                notification.classList.add('hide');
                notification.classList.remove('show');
            }, 5000);
            closeBtn.addEventListener('click', function (e) {
                notification.classList.add('hide');
                notification.classList.remove('show');

            });

            let closedBtn = document.querySelectorAll('.closedBtn');

            for (let j = 0; j < closedBtn.length; j++) {
                closedBtn[j].addEventListener('click', function (e) {
                    let dataId = e.target.getAttribute('data-id');

                    let parent = e.target.parentElement;
                    parent.classList.add('fall');

                    parent.addEventListener('transitionend', function (e) {
                        let getDelete = db.ref('pages/' + uid + '/' + pageName + '/' + 'contact/' + dataId);
                        getDelete.remove();
                    })
                })
            }

        });

        notifStatus = false;



        var getCount = db.ref('pages/' + uid + '/' + pageName + '/' + 'contact');

        getCount.on("value", function (snapshot) {
            let formMessageCount = document.querySelector(".form-message-count");
            let conCount = snapshot.val();
            let count = Object.keys(conCount);
            formMessageCount.innerText = count.length;
        });
    }




});


// firebase.auth().onAuthStateChanged(function (user) {
//     if (user) {
//         let uid = user.uid;
//         var getdelete = db.ref('pages/' + uid + '/' + pageName + '/' + 'contact');

//         var deleteValue = createFormMessageSection();
//         deleteValue[3].onclick = function() {
//             console.log("hi");
//             deleteValue[4].style.display = "none";
//             getdelete.remove();
//         }
//     }        
// });        
