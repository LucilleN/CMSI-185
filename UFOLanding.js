var grassHeight = 75;
var sunDiameter = 200;
var ufoXPosition = 200;
var ufoYPosition = 200;
var beamwidth = 0;
var beamGreenColor = 0;
var beamBlueColor = 0;
var cloudXPositions = -45;
var jetHeight = 100;
var canMoveRight = true;
var canMoveDown = true;
var flying = true;
var looping = true;

var paintSkyBefore = function() {
    background(181, 225, 242);
};

var drawHillsBefore = function() {
    noStroke();
    fill(95, 173, 139);
    ellipse(width/3, height-75, 500, 150);
    ellipse(0, height-50, 400, 250);
    ellipse(width, height-75, 400, 250);
};

var drawGrassBefore = function() {
    fill(150, 191, 136);
    rect(0, height-grassHeight, width, grassHeight);
};

var drawCloudsBefore = function() {
    fill(222, 241, 255);
    ellipse(cloudXPositions + 70, 101, 200, 100);
    ellipse(cloudXPositions + 392, 150, 200, 115);
    ellipse(cloudXPositions + 176, 112, 100, 60);
    ellipse(cloudXPositions + 291, 174, 142, 85);
    ellipse(cloudXPositions + 464, 160, 142, 65);
};

var drawSunBefore = function() {
    fill(222, 216, 126);
    ellipse(width, 0, sunDiameter, sunDiameter);
};

var drawJets = function() {
    fill(255, 201, 54);
    triangle(ufoXPosition-30, ufoYPosition, ufoXPosition-10, ufoYPosition, ufoXPosition-20, ufoYPosition+jetHeight);
    triangle(ufoXPosition+30, ufoYPosition, ufoXPosition+10, ufoYPosition, ufoXPosition+20, ufoYPosition+jetHeight);
};

var diminishJets = function() {
    if (jetHeight > 0) {
        jetHeight-=0.15;
    }
};

var drawUFOBefore = function() {
    fill(102, 44, 101);
    ellipse(ufoXPosition, ufoYPosition, 130, 22);
    ellipse(ufoXPosition, ufoYPosition-5, 80, 40);
};

var drawTreesBefore = function() {
   fill(45, 115, 74);
   triangle(-17, height, 109, height, 43, 159);
   triangle(30, height, 141, height, 85, 207);
   triangle(580, height, 500, height, 540, 250);    
};

var moveUFO = function() {
    if (canMoveRight) {
       ufoXPosition += 2;
    }
    else {
       ufoXPosition -= 2;
    }
    ufoYPosition = ufoYPosition + 0.25;
};

var changeUFODirection = function() {
    if (ufoXPosition === width-100) {
        canMoveRight = false;
    }
    if (ufoXPosition === 100) {
        canMoveRight = true;
    }
};

var moveClouds = function() {
    cloudXPositions = cloudXPositions + 0.2;
};

var paintSkyAfter = function() {
    background(84, 63, 49);
};

var drawHillsAfter = function() {
    fill(64, 38, 12);
    ellipse(width/3, height-75, 500, 150);
    ellipse(0, height-50, 400, 250);
    ellipse(width, height-75, 400, 250);
};

var drawGrassAfter = function() {
    fill(79, 48, 59);
    rect(0, height-grassHeight, width, grassHeight);
};

var drawCrater = function() {
    fill(46, 20, 20);
    ellipse(ufoXPosition, ufoYPosition+5, 194, 46);
};

var drawCloudsAfter = function() {
    fill(79, 31, 21);
    ellipse(cloudXPositions + 70, 101, 200, 100);
    ellipse(cloudXPositions + 392, 150, 200, 115);
    ellipse(cloudXPositions + 176, 112, 100, 60);
    ellipse(cloudXPositions + 291, 174, 142, 85);
    ellipse(cloudXPositions + 464, 160, 142, 65);
};

var drawSunAfter = function() {
    fill(194, 0, 0);
    ellipse(width, 0, sunDiameter, sunDiameter);
};

var drawUFOAfter = function() {
    fill(255, 255, 255);
    ellipse(ufoXPosition, ufoYPosition, 130, 22);
    ellipse(ufoXPosition, ufoYPosition-5, 80, 40);
};

var drawBeam = function() {
    fill(255, beamGreenColor, beamBlueColor);
    triangle(ufoXPosition + beamwidth, 0, ufoXPosition - beamwidth, 0, ufoXPosition, ufoYPosition);
};

var drawTreesAfter = function() {
    fill(38, 5, 1);
    triangle(-17, height, 109, height, 43, 159);
    triangle(30, height, 141, height, 85, 207);
    triangle(580, height, 500, height, 540, 250);
};

var expandBeam = function() {
    beamwidth++;
    beamGreenColor++;
    beamBlueColor++;
};

var mouseClicked = function() {
    if(looping) {
        noLoop();   
    }
    else {
        loop();
    }
    looping = !looping;
};

var endAnimation = function() {
    if (beamwidth>600) {
        noLoop();
    }
};

var draw = function() { 
   
   if (flying) {
    
    paintSkyBefore();
    drawHillsBefore();
    drawGrassBefore();
    drawCloudsBefore();
    drawSunBefore();
    drawJets();
    drawUFOBefore();
    changeUFODirection(); 
    moveUFO();
    diminishJets();
    moveClouds();
    drawTreesBefore();

   }
   
   if (ufoYPosition === height-40) {
       
        flying = false;
        
        paintSkyAfter();
        drawHillsAfter();
        drawGrassAfter();
        drawCrater();
        drawCloudsAfter();
        drawSunAfter();
        drawBeam();
        drawUFOAfter();
        drawTreesAfter();
        expandBeam();
        endAnimation();
   }
    
};
