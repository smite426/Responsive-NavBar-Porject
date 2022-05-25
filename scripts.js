var mobileBreakpoint = 600;

window.onload = function() {
    var screenWidth = window.innerWidth;
    var globalNavbar = document.getElementById("global-nav");
    var toggle = document.getElementById("menu-toggle");

    if (screenWidth > mobileBreakpoint) {
        globalNavbar.classList.add("open");
        toggle.classList.add("open");
    }

    toggle.onclick = function() {
        if (globalNavbar.classList.contains("open")){
            globalNavbar.classList.remove("open");
            toggle.classList.remove("open");
        }
        else {
            globalNavbar.classList.add("open");
            toggle.classList.add("open");
        }
    }

}

window.onresize = function() {
    var screenWidth = window.innerWidth;
    var globalNavbar = document.getElementById("global-nav");
    var toggle = document.getElementById("menu-toggle");

    if (screenWidth > mobileBreakpoint) {
        globalNavbar.classList.add("open");
        toggle.classList.add("open");
    }
    else {
        globalNavbar.classList.remove("open");
        toggle.classList.remove("open");
    }
}