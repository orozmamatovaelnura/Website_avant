function openSubcategories(evt, categoryName) {
    if ($(window).width() >= 576) {
        var i, x;
        console.log("window width is " + $(window).width().toString());
        x = document.getElementsByClassName("category");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }

        document.getElementById(categoryName).style.display = "block";

        document.getElementById("subcategories-container").style.border = "solid 1px rgba(0, 0, 0, .1)";
        document.getElementById("subcategories-container").style.borderLeft = "none";
    }
}

function closeSubcategories(evt, categoryName) {
    if ($(window).width() >= 576) {
        var i, x;
        x = document.getElementsByClassName("category");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
    }
    document.getElementById("subcategories-container").style.border = "none";
}



function openCloseSubcategoriesDown(evt, categoryName) {

    if ($(window).width() < 576) {
        var i, x;
        x = document.getElementsByClassName("category");


        if (document.getElementById(categoryName).title == "closed") {
            document.getElementById(categoryName).title = "open";

            document.getElementById(categoryName).style.display = "block";

        } else {
            document.getElementById(categoryName).title = "closed";
            document.getElementById(categoryName).style.display = "none";
        }
    }
}