// let lineX,
//     lineY,
//     text1,
//     text2,
//     text3,
//     text4,
//     textCenter;

let opacity = 50

let colors = [
    "255, 0, 0,",
    "0, 0, 255,",
    "0, 255, 0,",
    "255, 255, 0,",
    "0, 0, 50,"
];

let randCol;

let windowWidth = window.innerWidth,
    windowHeight = window.innerHeight;

let centerX = windowWidth / 2,
    centerY = windowHeight / 2,
    lineOffSet = 40,
    textOffSet = 60,
    mouseOffSet = 10;

function setup() {

    let credits = createDiv('Made<br>with<br>P5.js');

    credits.addClass('credits')
    credits.style('position', 'fixed')
    credits.style('font-family', 'arial')
    credits.style('text-transform', 'uppercase')
    credits.style('font-size', '0.7em')

    createCanvas(window.innerWidth, window.innerHeight);

    // let lineX = line(centerX - lineOffSet, centerY, centerX + lineOffSet, centerY),
    //     lineY = line(centerX, centerY - lineOffSet, centerX, centerY + lineOffSet),
    //     text1 = text('black', textOffSet, textOffSet),
    //     text2 = text('red', windowWidth - textOffSet, textOffSet),
    //     text3 = text('blue', textOffSet, windowHeight - textOffSet),
    //     text4 = text('pink', windowWidth - textOffSet, windowHeight - textOffSet),
    //     textCenter = text('small', centerX, centerY);
}

function draw() {

    let randomRed = Math.random() * 255,
        randomGreen = Math.random() * 255,
        randomBlue = Math.random() * 255;

    let mapRed = Math.round(map(mouseX, 0, windowWidth, 0, 255)),
        mapGreen = Math.round(map(mouseY, 0, windowHeight, 0, 255)),
        mapBlue = Math.round(map(mouseY, 0, windowHeight, 0, 255));

    let circDist = dist(mouseX, mouseY, centerX, centerY),
        rad = sqrt(circDist) * 4;

    randCol = floor(random(colors.length));

    let credits = select('.credits')
    credits.style('left', mouseX + 'px')
    credits.style('top', mouseY + 20 + 'px')

    console.log(mapGreen)

    background(255, opacity)

    // lineX.display()
    // lineY.display()
    line(centerX - lineOffSet, centerY, centerX + lineOffSet, centerY)
    line(centerX, centerY - lineOffSet, centerX, centerY + lineOffSet)
    line(mouseX - 10, mouseY - 10, windowWidth / 2, windowHeight / 2);

    // circle(mouseX - mouseOffSet, mouseY - mouseOffSet, 30);
    fill(mapRed, mapGreen, 0)
    stroke(mapRed, mapGreen, 0)
    strokeWeight(2);

    // text('small', centerX, centerY)
    text('black', textOffSet, textOffSet)
    text('red', windowWidth - textOffSet, textOffSet)
    text('green', textOffSet, windowHeight - textOffSet)
    text('yellow', windowWidth - textOffSet, windowHeight - textOffSet)
    textAlign(CENTER, CENTER);
    textSize(30)
}

// class Line {
//     constructor() {
//         line(centerX - lineOffSet, centerY, centerX + lineOffSet, centerY)
//         line(centerX, centerY - lineOffSet, centerX, centerY + lineOffSet);
//     }
// }