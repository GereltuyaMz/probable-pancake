function search() {
    
    var input = document.getElementById("search-input");
    var filter = input.value.toUpperCase();
    // var name = document.getElementById("myId").innerHTML;
    var a = document.getElementsByClassName("used-website");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
        } else {
        a[i].style.display = "none";
        }
    }
}

function filter() {
    var selectedValue = document.getElementById("filter-option").value;
    var a = document.getElementsByClassName("used-website");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].getAttribute("data");
        if (selectedValue == "Бүгд" || txtValue.toUpperCase() == selectedValue.toUpperCase()) {
        a[i].style.display = "";
        } else {
        a[i].style.display = "none";
        }
    }
}