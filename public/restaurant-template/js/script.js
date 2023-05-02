var modal = document.querySelector(".menu-modal-container");
var menuBtn = document.getElementById('menu-modal-btn');

// Menu Modal section

menuBtn.addEventListener('click', function(){
    modal.style.display = "block";
})
// menuBtn.onclick = function () {

    
// }

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
