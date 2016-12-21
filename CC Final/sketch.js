//Katharine LoScalzo
//Creative Coding Final - December 2016
//"The Bird Above", "Blackbird" by the Beatles

var arrow;

//variables of song snippets
var songP1;
var songP2;
var songP3;
var songP4;
var songP5;
var songInstru;
var songP7;
var songP8;

//frameOne variables
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

//frameTwo variables
var landscape1CU;
var bbSadGlow;
var tear;
var xPosTear = 415;
var yPosTear = 243;
var yVelTear = 6;
var distantWB;
var xPosdWB = 800;
var yPosdWB = 90;
var xVeldWB = 5.8;
var birdECL;
var xPosECL = 727;
var yPosECL = 50;
var xVelECL = 5.8;

//frameThree variables
var thunder;
var hawkScream;
var landscape2;
var momBB;
var xPosMom = 0;
var yPosMom = 200;
var xVelMom = 9;

var whiteAngryB1;
var xPosWAB1 = 800;
var yPosWAB1 = 100;
var xVelWAB1 = 13;

var whiteAngryB3;
var xPosWAB3 = 450;
var yPosWAB3 = 300;
var xVelWAB3 = 10;

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
var yVelRain4 = 12;
var xPosRain5 = 350;
var yPosRain5 = 205;
var yVelRain5 = 6;
var xPosRain8 = 730;
var yPosRain8 = 190;
var yVelRain8 = 10;
var xPosRain7 = 200;
var yPosRain7 = 205;
var yVelRain7 = 3.5;

//frameFour variables
var landscape3;
var babyBB;
var babyBBchirp;
var xPosbBB = 300;
var yPosbBB = 110;
var xVelbBB = 3.5;
var yVelbBB = 4;
var yDirbBB = 1;

//frameFive variables
var scaredBabyBB;
var landscape4;
var xVelbBB2 = 5.5;
var yVelbBB2 = 5.5;
var xPosTear2 = 670;
var yPosTear2 = 105;
var yVelTear2 = 3;

//frameSix variables
var landscape5;
var squaking;
var flapping;
var lilWB;
var xPosLWB = 620;
var yPosLWB = 170;
var xVelLWB = 4.5;
var yVelLWB = 4.5;
var dadWB;
var xPosDWB = 325;
var yPosDWB = 85;
var yVelDWB = 2;
var yDirDWB = 1;

//frameSeven variables
var landscape6;

var momSpirit;
var xPosMS = 0;
var yPosMS = 10;
var yVelMS = 1;
var yDirMS = 1;

var bbFly;
var xPosBBF = 210;
var yPosBBF = 180;
var yVelBBF = 2;
var yDirBBF = 1;

var happyMoon;
var xPosHM = 650;
var yPosHM = 0;
var yVelHM = 1;

//frameEight variables
var landscape7;
var bbEnd;
var xPosBBE = 0;
var yPosBBE = 25;
var xVelBBE = 6;


var index = 1; //each time user clicks the mouse, the index keeps track of which frame user is in (within the switch); thjs is what is changing

function preload() {
    songP1 = loadSound("assets/songP1.mp3"); //The Beatles'
    songP2 = loadSound("assets/songP2.mp3"); //The Beatles'
    songP3 = loadSound("assets/songP3.mp3"); //The Beatles'
    songP4 = loadSound("assets/songP4.mp3"); //The Beatles'
    songP5 = loadSound("assets/songP5.mp3"); //The Beatles'
    songInstru = loadSound("assets/songP6_instru.mp3"); //The Beatles'
    songP7 = loadSound("assets/songP7.mp3"); //The Beatles'
    songP8 = loadSound("assets/songP8.mp3"); //The Beatles'
    arrow = loadImage("assets/arrow.png");

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
    birdECL = loadImage("assets/birdECL.png");

    //frameThree assets
    thunder = loadSound("assets/thunder.wav"); //from freesound.org
    hawkScream = loadSound("assets/hawkScream.wav"); //from freesound.org
    landscape2 = loadImage("assets/landscape2.png");
    momBB = loadImage("assets/momBB.png");
    whiteAngryB1 = loadImage("assets/whiteBirdangry.png");
    whiteAngryB3 = loadImage("assets/whiteBirdangry3.png");
    rain = loadImage("assets/tear.png");

    //frameFour assets
    babyBBchirp = loadSound("assets/babyBBchirp.mp3"); //from freesound.org
    landscape3 = loadImage("assets/landscape3.png");
    babyBB = loadImage("assets/babyBB.png");

    //frameFive assets
    landscape4 = loadImage("assets/landscape4.png");
    scaredBabyBB = loadSound("assets/scaredBabyBB.wav");

    //frameSix assets
    squaking = loadSound("assets/squaking.mp3"); //from biblesound.com
    flapping = loadSound("assets/wingsFlap.mp3"); //from biblesound.com
    landscape5 = loadImage("assets/landscape5.png");
    lilWB = loadImage("assets/lilWB.png");
    dadWB = loadImage("assets/dadWB.png");

    //frameSeven assets
    landscape6 = loadImage("assets/landscape6.png");
    momSpirit = loadImage("assets/momSpirit.png");
    bbFly = loadImage("assets/bbFly.png");
    happyMoon = loadImage("assets/happyMoon.png");

    //frameEight
    landscape7 = loadImage("assets/landscape7.png");
    bbEnd = loadImage("assets/bbEnd.png");
}

function setup() {
    createCanvas(800, 500);
    frameRate(10);
    background(firstScreen);
    songP1.play();
    image(arrow, 740, 250, 50,50);
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

    image(arrow, 740, 250, 50,50);
}

function mousePressed() {
    console.log(mouseX);
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
                thunder.play();
                hawkScream.play();
                break;
            case 4:
                thunder.stop();
                hawkScream.stop();
                babyBBchirp.play();
                songP3.stop();
                songP4.play();
                break;
            case 5:
                babyBBchirp.stop();
                scaredBabyBB.play();
                songP4.stop();
                songP5.play();
                break;
            case 6:
                scaredBabyBB.stop();
                songP5.stop();
                squaking.play();
                flapping.play();
                songInstru.play();
                break;
            case 7:
                songInstru.stop();
                squaking.stop();
                flapping.stop();
                songP7.play();
                break;
            case 8:
                songP7.stop();
                songP8.play();
                break;
        }
    }
}

function frameOne() {
    if (frameCount > 44) {
        image(arrow, 700, 250);
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
    image(birdECL, xPosECL, yPosECL);
    
    //call animation / motion logic
    yPosTear += yVelTear;
    xPosdWB -= xVeldWB;
    xPosECL -= xVelECL;
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
    yPosRain += yVelRain;

    image(rain, xPosRain2, yPosRain2);
    yPosRain2 += yVelRain2;

    image(rain, xPosRain3, yPosRain3);
    yPosRain3 += yVelRain3;

    image(rain, xPosRain4, yPosRain4);
    yPosRain4 += yVelRain4;

    image(rain, xPosRain5, yPosRain5);
    yPosRain5 += yVelRain5;

    image(rain, xPosRain8, yPosRain8);
    yPosRain8 += yVelRain8;

    image(rain, xPosRain7, yPosRain7);
    yPosRain7 += yVelRain7;
}

function frameFour() {
    background(landscape3);

    image(babyBB, xPosbBB, yPosbBB);
    yPosbBB -= yVelbBB;

    if (yPosbBB < 80 || yPosbBB > 110) {
        yVelbBB *= -yDirbBB;
    }
}

function frameFive() {
    background(landscape4);
    image(babyBB, xPosbBB, yPosbBB);

    xPosbBB += xVelbBB2; //go right
    yPosbBB -= yVelbBB2; //go down

    if (yPosbBB < 80 || xPosbBB < 315) {
        yVelbBB2 *= -yDirbBB;
    }

    image(tear, xPosTear2, yPosTear2);
    yPosTear2 += yVelTear2;
}

function frameSix() {
    background(landscape5);

    image(lilWB, xPosLWB, yPosLWB);

    xPosLWB -= xVelLWB; //go left
    yPosLWB += yVelLWB; //go down

    if (yPosLWB > 350) {
        yPosLWB -= yVelLWB;
    }

    image(dadWB, xPosDWB, yPosDWB);

    yPosDWB += yVelDWB;
    if (yPosDWB < 75 || yPosDWB > 105) {
        yVelDWB *= -yDirDWB;
    }
}

function frameSeven() {
    background(landscape6);

    image(momSpirit, xPosMS, yPosMS);
    yPosMS += yVelMS;
    if (yPosMS < 11 || yPosMS > 40) {
        yVelMS *= -yDirMS;
    }

    image(bbFly, xPosBBF, yPosBBF);
    yPosBBF += yVelBBF;
    if (yPosBBF < 180 || yPosBBF > 210) {
        yVelBBF *= -yDirBBF;
    }

    image(happyMoon, xPosHM, yPosHM);
    yPosHM += yVelHM;
    if (yPosHM > 37) {
        yPosHM = 37;
    }
}

function frameEight() {

    background(landscape7);
    image(bbEnd, xPosBBE, yPosBBE);
    xPosBBE += xVelBBE;

}
