var photo = [
    {name: "Намтар",         image: "./images/screenshot1.png"},
    {name: "Онлайн дэлгүүр", image: "./images/screenshot2.png"},
    {name: "Ресторан",       image: "./images/screenshot3.png"},
    {name: "Аялал жуулчлал", image: "./images/screenshot4.png"},
    {name: "Бизнес",         image: "./images/screenshot5.png"},
];

var i;
for (i=0; i < photo.length;i++){
    
    var a1 = document.createElement('div');
    var b1 = document.getElementsByClassName('templates')[0];
    a1.classList.add('template');
    b1.appendChild(a1);

    var jump = document.createElement('a');
    jump.href = ("./html/sign-in.html");
    a1.appendChild(jump);

    var img = document.createElement('img');
    img.src = photo[i].image;
    jump.appendChild(img);
    
    var text = document.createElement('span');
    text.innerText = photo[i].name;
    text.classList.add('name');
    a1.appendChild(text);

}