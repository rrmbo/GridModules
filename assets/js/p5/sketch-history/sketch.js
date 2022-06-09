let history;
let count = 0;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    let url = "history.json";
    loadJSON(url, loaded);
    background(255);
    fill(0);
    textSize(20)
    textAlign(CENTER, CENTER);
    frameRate(5);
}

function loaded(data) {
    history = data;

}

// function draw() {

//     let actHour = history[count].visitCount;
//     let ratioSize = map(actHour, 0, 23, 0, 255) / 10

//     background(255, 5);
//     textSize(ratioSize);

//     console.log(ratioSize)

//     text(history[count].title, mouseX, mouseY);
//     count++;
//     if (count > Object.keys(history).length) {
//         count = 0;
//     }
// }

// function draw() {
//     fill(0);

//     let x1 = width / 2;
//     let y1 = height / 2;
//     let x2 = mouseX;
//     let y2 = mouseY;

//     let actHour = history[count].visitCount;
//     let ratioSize = sqrt(map(actHour, 0, 23, 0, 255))

//     textSize(ratioSize);
//     background(255, 5);
//     push();
//     translate((x1 + x2) / 2, (y1 + y2) / 2);
//     rotate(atan2(y2 - y1, x2 - x1));
//     text(history[count].title, 0, -5);
//     pop();
//     count++;
//     if (count > Object.keys(history).length) {
//         count = 0;
//     }
// }
function draw() {
    fill(0);

    let x1 = width / 2;
    let y1 = height / 2;
    let x2 = mouseX;
    let y2 = mouseY;

    let actHour = history[count].visitCount;
    let ratioSize = sqrt(map(actHour, 0, 23, 0, 255));

    textSize(ratioSize);
    background(255, 1);
    push();
    translate((x1 + x2) / 2, (y1 + y2) / 2);
    rotate(atan2(y2 - y1, x2 - x1));
    text(history[count].title, 0, -5);
    pop();
    count++;
    if (count >= Object.keys(history).length) {
        count = 0;
    }
}