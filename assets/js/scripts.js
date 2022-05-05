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