/*
created by Mark Chan (@markcwy // markcwy.com)
if using any part of this code for your own work,
please don't forget to give credit! Thanks!!
*/

//text inputs
var sentence, size, tracking;
var xPos, yPos, xMargin, xBreak;
//sound inputs
var talk, mic, freq;
var minF, maxF, minV, maxV;
var freqArray, volArray;
var avgFreqArray, avgVolArray;
var volHistory;
//switches
var genSwitch, recSwitch;
//misc
var state;
var HKNova;

function preload() {
  HKNova = loadFont('../phonetic-typography/HKNovaSB.otf');
}

function refresh() {
  genSwitch = false;
  recSwitch = false;
  volArray = [];
  freqArray = [];
  volHistory = [];
  for (var i = 0; i < 16; i++) {
    volHistory[i] = 0;
  }
  state = 0;
  size = 3;
  tracking = 12*size;
}

function speechRefresh() {
  talk = new p5.SpeechRec();
  talk.start();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 1);
  angleMode(DEGREES);
  rectMode(CENTER)
  textAlign(CENTER);
  textFont(HKNova);
  mic = new p5.AudioIn();
  mic.start();
  freq = new p5.FFT(0.2, 16);
  freq.setInput(mic);
  refresh();
  frameRate(60);
}

function draw() {
  push();

  if (state == 0) {
    intro(width/2, height/2);
  } else {

    if (recSwitch) {
      background(0, 0, 0);
      textStyling();
      var spectrum = freq.analyze(16);
      var f10 = map(spectrum[9], 0, 255, 0, 25);
      var f11 = map(spectrum[10], 0, 255, 0, 25);
      var vol = map(mic.getLevel()*1000, 0, 400, 0, 50);
      var fOutput = map(f10 + f11, 0, 50, minF, maxF);
      var volOutput = map(vol, 0, 50, minV, maxV);

      if (talk.resultValue==true) {
        sentence = talk.resultString;
        console.log(sentence);
        if (state == 1) {
          state++;
        }
      }

      if (mouseIsPressed){
        if (fOutput > 0 && volOutput > 0) {
          freqArray.push(constrain(fOutput, maxF, minF));
          volArray.push(constrain(volOutput, minV, maxV));
          console.log(freqArray);
          console.log(volArray);
        }

        //display the little sound wave thing
        if (!genSwitch) {
          volHistory.push(constrain(volOutput, minV, maxV));
          if (volHistory.length > 15) {
            volHistory.splice(0, 1);
          }
        }

      }
    }

    if (genSwitch){
      avgFreqValues();
      avgVolValues();
      for (var i = 0; i < sentence.length; i++) {
        variableType(sentence.substring(i, i + 1), avgFreqArray[i], avgVolArray[i]);
        if (xPos > (4/5)*windowWidth + 2.5*tracking) {
          xBreak = xPos;
          yPos += 65*size;
          xPos = 0;
        }
      }
    }
  }
  pop();

  instructions();
  textSize(8);
  fill(0, 0, 100);
  text("I F    S T U C K ,    R E F R E S H    T H E    P A G E    ( C M D + R )", width/2, height - 30);

}

function keyPressed() {
  if (key == ' ') {
    if (state >= 0 && state < 4) {
      state ++;
    } else {
      state = 0;
    }

    if (state == 1) {
      speechRefresh();
      recSwitch = !recSwitch;
    } else if (state == 3) {
      genSwitch = !genSwitch;
    } else if (state == 4) {
      refresh();
      speechRefresh();
    }

  } else if (key == '0') {
    volArray = [];
    freqArray = [];
    speechRefresh();
  }
  return false;
}

function textStyling() {

  //if current x position is greater than the longest line, use xPos value
  if (xPos >= xBreak) {
    translate(width/2 - (xPos/2), windowHeight/2 + 35*size - ((3/4)*yPos));
  } else {
    translate(width/2 - (xBreak/2), windowHeight/2 + 35*size - ((3/4)*yPos));
  }

  //resets all code to 0 at start of draw cycle
  xPos = 0;
  yPos = 0;
  xBreak = 0;
  minF = size;
  maxF = -2*size;
  minV = -1*size;
  maxV = 5*size;

  fill(0, 0, 100);
  noStroke();

}

function avgFreqValues() {
  startPos = 0;
  //find out how many values of frequency are mapped to a single letter
  subSet = round(freqArray.length/sentence.length);

  //creates a new array with at sentence.length with 0s;
  avgFreqArray = zeroArray();

  // for every element of avgFreqArray
  for (var j = 0; j < sentence.length; j++) {

    //test to see if adding a subSet will cause it to overshoot freqArray.length
    var x = startPos + subSet;
    if (x < freqArray.length) {

      //for every k elements in freqArray
      for (var k = startPos; k < (subSet*(j + 1)); k ++) {
        avgFreqArray[j] += (freqArray[k]/subSet);
      }

      //skip to the next subSet of freqArray
      startPos += subSet;

    }
    else {
      //for the remainder of the array that doesn't = subSet
      for (var k = startPos; k < freqArray.length; k++) {
        avgFreqArray[j] += (freqArray[k])/(freqArray.length - startPos);
      }
    }
  }

  console.log("freq:" + avgFreqArray);
}

function avgVolValues() {
  startPos = 0;
  subSet = round(volArray.length/sentence.length);

  avgVolArray = zeroArray();

  for (var j = 0; j < sentence.length; j++) {

    var x = startPos + subSet;
    if (x < volArray.length) {

      for (var k = startPos; k < (subSet*(j + 1)); k ++) {
        avgVolArray[j] += (volArray[k]/subSet);
      }
      startPos += subSet;

    } else {

      for (var k = startPos; k < volArray.length; k++) {
        avgVolArray[j] += (volArray[k])/(volArray.length - startPos);

      }
    }
  }
  console.log("vol:" + avgVolArray);
}

function zeroArray() {
  //creates array of zeros with sentence.length;
  emptyArray = new Array(sentence.length);
  for (var i = 0; i < sentence.length; i ++) {
    emptyArray[i] = 0;
  }
  return emptyArray;
}
