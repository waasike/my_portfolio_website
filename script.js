// DARK MODE
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// NAVIGATION BAR 
window.onscroll = function() {newFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function newFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// ACTIVE BUTTON
var btnContainer = document.getElementById("menu");

var btns = btnContainer.getElementsByClassName("navlinks");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


