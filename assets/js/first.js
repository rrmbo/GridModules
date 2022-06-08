// Horizontal Scroll

function scrollHorizontally(e) {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    var scrollSpeed = 30;
    document.documentElement.scrollLeft -= (delta * scrollSpeed);
    document.body.scrollLeft -= (delta * scrollSpeed);
    // e.preventDefault();
}

if (window.addEventListener) {
    // IE9, Chrome, Safari, Opera
    window.addEventListener("mousewheel", scrollHorizontally, false);
    // Firefox
    window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
} else {
    // IE 6/7/8
    window.attachEvent("onmousewheel", scrollHorizontally);
}

let mon = document.getElementById('mon');
let tue = document.getElementById('tue');
let wed = document.getElementById('wed');
let thu = document.getElementById('thu');
let fri = document.getElementById('fri');
let sat = document.getElementById('sat');
let sun = document.getElementById('sun');
let windowWidth = window.innerWidth;

let main = document.getElementsByTagName("main")[0];
main.addEventListener("scroll", (event) => {
    let scrollLeft = main.scrollLeft;

    console.log(scrollLeft)

    if (scrollLeft < (0.5) * windowWidth) {
        mon.classList.add('highlight');
        tue.classList.remove('highlight')
        wed.classList.remove('highlight')
        thu.classList.remove('highlight')
        fri.classList.remove('highlight')
        sat.classList.remove('highlight')
        sun.classList.remove('highlight')
    } else if (scrollLeft < 1.5 * windowWidth) {
        mon.classList.remove('highlight');
        tue.classList.add('highlight')
        wed.classList.remove('highlight')
        thu.classList.remove('highlight')
        fri.classList.remove('highlight')
        sat.classList.remove('highlight')
        sun.classList.remove('highlight')
    } else if (scrollLeft < 2.5 * windowWidth) {
        mon.classList.remove('highlight');
        tue.classList.remove('highlight')
        wed.classList.add('highlight')
        thu.classList.remove('highlight')
        fri.classList.remove('highlight')
        sat.classList.remove('highlight')
        sun.classList.remove('highlight')
    } else if (scrollLeft < 3.5 * windowWidth) {
        mon.classList.remove('highlight');
        tue.classList.remove('highlight')
        wed.classList.remove('highlight')
        thu.classList.add('highlight')
        fri.classList.remove('highlight')
        sat.classList.remove('highlight')
        sun.classList.remove('highlight')
    } else if (scrollLeft < 4.5 * windowWidth) {
        mon.classList.remove('highlight');
        tue.classList.remove('highlight')
        wed.classList.remove('highlight')
        thu.classList.remove('highlight')
        fri.classList.add('highlight')
        sat.classList.remove('highlight')
        sun.classList.remove('highlight')
    } else if (scrollLeft < 5.5 * windowWidth) {
        mon.classList.remove('highlight');
        tue.classList.remove('highlight')
        wed.classList.remove('highlight')
        thu.classList.remove('highlight')
        fri.classList.remove('highlight')
        sat.classList.add('highlight')
        sun.classList.remove('highlight')
    } else {
        mon.classList.remove('highlight');
        tue.classList.remove('highlight')
        wed.classList.remove('highlight')
        thu.classList.remove('highlight')
        fri.classList.remove('highlight')
        sat.classList.remove('highlight')
        sun.classList.add('highlight')
    }
});