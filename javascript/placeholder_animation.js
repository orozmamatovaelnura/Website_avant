let placeholderIndex = 0;
let placeholder = "";
const txt = "Гибкие шланги...";
const speed = 120;

function type() {
    if (placeholderIndex >= 0) placeholder += txt.charAt(placeholderIndex);
    var searchBars = document.getElementsByClassName("search-bar-input");
    for (var j = 0; j < searchBars.length; j++) {
        searchBars[j].setAttribute('placeholder', placeholder);
    }
    if (placeholderIndex > 20) {
        placeholderIndex = -5;
        placeholder = "";
    }
    placeholderIndex++;
    setTimeout(type, speed);
}

window.onload = function() {
    type();
}