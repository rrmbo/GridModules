// Horizontal Scroll

function scrollHorizontally(e) {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    var scrollSpeed = 30;
    document.documentElement.scrollLeft -= (delta * scrollSpeed);
    document.body.scrollLeft -= (delta * scrollSpeed);
    e.preventDefault();
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

// Rules

let n = 0;
let matches = document.querySelectorAll("button");
let firstbtn = matches[0];
let secondbtn = matches[1];

// Button-Functions

firstbtn.addEventListener("click", newImage);
secondbtn.addEventListener("click", newElement);

function buttonPressed() {
    n++;
    document.getElementById("element").style.left = n + "em";
}

function newElement() {
    let div = document.createElement("div");
    div.classList.add('random')
    div.style.left = Math.random() * window.innerWidth + "px";
    div.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(div);
}

/*function newImage() {
    n++;
    let diff = 4;
    let myImage = new Image();
    myImage.src = '/assets/images/dolphin_x.png';
    myImage.classList.add('hole');
    myImage.style.left = n * diff + "em";
    document.body.appendChild(myImage);
}*/
function newImage() {
    let myImage = new Image();
    myImage.src = '/assets/images/dolphin_x.png';
    myImage.classList.add('hole');
    myImage.style.left = Math.random() * window.innerWidth + "px";
    myImage.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(myImage);
}