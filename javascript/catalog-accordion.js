/*
var w = window.innerWidth;
var acc = document.getElementsByClassName("accordion");

if (w < 770 || w > 420) {
    var panel = acc.nextElementSibling;
    panel.style.display = "block";
}

*/




/*
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
*/

function openSubcategories(evt, categoryName) {
    var i, x;
    x = document.getElementsByClassName("category");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    document.getElementById(categoryName).style.display = "block";
    document.getElementsByClassName("subcategories-container").style.display = "block";
}

function closeSubcategories(evt, categoryName) {
    var i, x;
    x = document.getElementsByClassName("category");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }


}