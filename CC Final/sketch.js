//Katharine LoScalzo
//Creative Coding Final
//December 2016

//don't forget to use a server to get sound

//variables of song snippets
var songP1;
var songP2;
var songP3;
var songP4;
var songP5;
var songInstru;
var songP7;
var songP8;

//frameOne images
var firstScreen;
var landscape1; //first landscape background
var bbWatchGlow; //glowing black bird PNG
var musicNote1;
var xPosmN1 = 375; //x position of musicNote1
var yPosmN1 = 200;
var xVelmN1 = 2.2; //x velocity of musicNote1
var yVelmN1 = 2.2;
var musicNote2;
var xPosmN2 = 450; //x position of musicNote2
var yPosmN2 = 190;
var xVelmN2 = 2.3; //x velocity of musicNote2
var yVelmN2 = 2.3;
var musicNote3;
var xPosmN3 = 530; //x position of musicNote3
var yPosmN3 = 180;
var xVelmN3 = 2.4; //x velocity of musicNote3
var yVelmN3 = 2.4;

//frameTwo images
var landscape1CU;
var bbSadGlow;
var tear;
var xPosTear = 415;
var yPosTear = 243;
var yVelTear = 6;
var distantWB;
var xPosdWB = 800;
var yPosdWB = 50;
var xVeldWB = 6;

//frameThree images
var landscape2;
var momBB;
var xPosMom = 0;
var yPosMom = 200;
var xVelMom = 12;

var whiteAngryB1;
var xPosWAB1 = 800;
var yPosWAB1 = 100;
var xVelWAB1 = 11;

var whiteAngryB3;
var xPosWAB3 = 450;
var yPosWAB3 = 300;
var xVelWAB3 = 9;

var rain;
var xPosRain = 200;
var yPosRain = 120;
var yVelRain = 6;
var xPosRain2 = 400;
var yPosRain2 = 200;
var yVelRain2 = 10;
var xPosRain3 = 600;
var yPosRain3 = 170;
var yVelRain3 = 4;
var xPosRain4 = 100;
var yPosRain4 = 105;
var yVelRain4 = 6;
var xPosRain5 = 350;
var yPosRain5 = 205;
var yVelRain5 = 6;
var xPosRain8 = 730;
var yPosRain8 = 190;
var yVelRain8 = 4;
var xPosRain7 = 200;
var yPosRain7 = 205;
var yVelRain7 = 2;

var index = 1; //each time user clicks the mouse, the index keeps track of which frame user is in (within the switch); thjs is what is changing

function preload() {
    songP1 = loadSound("assets/songP1.mp3");
    songP2 = loadSound("assets/songP2.mp3");
    songP3 = loadSound("assets/songP3.mp3");
    songP4 = loadSound("assets/songP4.mp3");
    songP5 = loadSound("assets/songP5.mp3");
    songInstru = loadSound("assets/songP6_instru.mp3");
    songP7 = loadSound("assets/songP7.mp3");
    songP8 = loadSound("assets/songP8.mp3");

    //frameOne assets
    firstScreen = loadImage("assets/firstScreen.png");
    bbWatchGlow = loadImage("assets/bbWatchGlow.png");
    bbSadGlow = loadImage("assets/bbSadGlow.png");
    landscape1 = loadImage("assets/landscape1.png");
    musicNote1 = loadImage("assets/musicNote1.png");
    musicNote2 = loadImage("assets/musicNote2.png");
    musicNote3 = loadImage("assets/musicNote3.png");

    //frameTwo assets
    landscape1CU = loadImage("assets/landscape1_CU.png");
    tear = loadImage("assets/tear.png");
    distantWB = loadImage("assets/distantWB.png");

    //frameThree assets
    landscape2 = loadImage("assets/landscape2.png");
    momBB = loadImage("assets/momBB.png");
    whiteAngryB1 = loadImage("assets/whiteBirdangry.png");
    whiteAngryB3 = loadImage("assets/whiteBirdangry3.png");
    rain = loadImage("assets/tear.png");
}

function setup() {
    createCanvas(800, 500);
    frameRate(10);

    background(firstScreen);
    songP1.play();
}

function draw() {

    switch (index) {
        case 1:
            frameOne();
            break;
        case 2:
            frameTwo();
            break;
        case 3:
            frameThree();
            break;
        case 4:
            frameFour();
            break;
        case 5:
            frameFive();
            break;
        case 6:
            frameSix();
            break;
        case 7:
            frameSeven();
            break;
        case 8:
            frameEight();
            break;
    }

    line(650, 0, 650, height);

}

function mousePressed() {
    console.log(mouseX);
}

if (mouseX == 500 && mouseY == 300) {
    //when rect is clicked, change background
    background(0);
    fill(0, 255, 0);
    ellipse(200, 200, frameCount);
}


function mouseClicked() {

    if (mouseX > 650) {
        index++;

        console.log(index);

        switch (index) {
            case 2:
                songP1.stop();
                songP2.play();
                break;
            case 3:
                songP2.stop();
                songP3.play();
                break;
            case 4:
                songP3.stop();
                songP4.play();
                break;
            case 5:
                songP4.stop();
                songP5.play();
                break;
            case 6:
                songP5.stop();
                songInstru.play();
                break;
            case 7:
                songInstru().stop;
                songP7.play();
                break;
            case 8:
                songP7().stop;
                songP8.play();
                break;
        }
    }
}


function frameOne() {

    if (frameCount > 30) {
        background(landscape1);
        image(bbWatchGlow, 207, 240);

        image(musicNote1, xPosmN1, yPosmN1);
        image(musicNote2, xPosmN2, yPosmN2);
        image(musicNote3, xPosmN3, yPosmN3);

        //call animation / motion logic
        xPosmN1 += xVelmN1;
        yPosmN1 -= yVelmN1;
        xPosmN2 += xVelmN2;
        yPosmN2 -= yVelmN2;
        xPosmN3 += xVelmN3;
        yPosmN3 -= yVelmN3;
    }

}

function frameTwo() {
    background(landscape1CU);
    image(bbSadGlow, 325, 185);

    image(tear, xPosTear, yPosTear);
    image(distantWB, xPosdWB, yPosdWB);

    //call animation / motion logic
    yPosTear += yVelTear;
    xPosdWB -= xVeldWB;
}


function frameThree() {
    background(landscape2);
    
    image(momBB, xPosMom, yPosMom);
    xPosMom += xVelMom;
    
    image(whiteAngryB1, xPosWAB1, yPosWAB1);
    xPosWAB1 -= xVelWAB1;
    image(whiteAngryB3, xPosWAB3, yPosWAB3);
    xPosWAB3 -= xVelWAB3;
    
    image(rain, xPosRain, yPosRain);
//    image(rain, xPosRain2, yPosRain2);
//    image(rain, xPosRain3, yPosRain3);
}

function frameFour() {
    background(255);
    fill(255, 255, 0);
    rect(300, 300, 50, 50);

}

function frameFive() {
    background(255);
    fill(255, 255, 0);
    rect(300, 300, 50, 50);

}

function frameSix() {
    background(255);
    fill(255, 255, 0);
    rect(300, 300, 50, 50);

}

function frameSeven() {
    background(255);
    fill(255, 255, 0);
    rect(300, 300, 50, 50);

}

function frameEight() {
    background(255);
    fill(255, 255, 0);
    rect(300, 300, 50, 50);

}




//    if(frameCount - timeSnapshot < 150){
