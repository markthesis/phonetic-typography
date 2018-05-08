/*
created by Mark Chan (@markcwy // markcwy.com)
with the help of many many tutorial videos by Daniel Shiffman (The Coding Train)
if using any part of this code for your own work,
please don't forget to give credit! Thanks!!
*/

//text inputs
var sentence, size, tracking;
var xPos, yPos, xBreak;
//sound inputs
var talk, mic, freq;
var minF, maxF, minV, maxV;
var freqArray = [];
var volArray = [];
var avgFreqArray, avgVolArray;
var volHistory;
//switches
var recSwitch, voiceListen;
var mouseHover;
//misc
var state;
var HKNova;
var elapsedTime;
//text sizes
var h1 = 14;
var body = 17;
var button = 11;

function preload() {
  HKNova = loadFont('../phonetic-typography/HKNovaSB.otf');
}

function refresh() {
  currentTime = 0;
  recSwitch = false;
  voiceListen = false;
  volHistory = zeroArray(16);
  size = 3;
  tracking = 12*size;
}

function speechRefresh() {
  volArray = [];
  freqArray = [];
  talk = new p5.SpeechRec();
  talk.start();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  angleMode(DEGREES);
  rectMode(CENTER)
  textAlign(CENTER);
  textFont(HKNova);
  mic = new p5.AudioIn();
  freq = new p5.FFT(0.2, 16);
  mic.start();
  freq.setInput(mic);
  refresh();
  state = 0;
  elapsedTime = 0;
  frameRate(60);
}

function draw() {
  cursor(ARROW);
  mouseHover = false;
  //reset to home after period of inactivity
  var currentTime = round((millis() - elapsedTime)/1000);
  if (currentTime == 30) {
    refresh();
    speechRefresh();
    elapsedTime = millis();
    state = 0;
  }

  push();
  if (state == 0) {
    intro();
  } else if (state == 2) {
    background(0, 0, 0);

    if (voiceListen) {
      if (talk.resultValue==true && !recSwitch) {
        sentence = talk.resultString;
        console.log(sentence);
        if (state == 2) {
          state++;
        }
      }
    }

    if (recSwitch) {
      minF = size;
      maxF = -1*size;
      minV = -1.5*size;
      maxV = 5*size;
      var spectrum = freq.analyze(16);
      var f10 = map(spectrum[9], 0, 255, 0, 25);
      var f11 = map(spectrum[10], 0, 255, 0, 25);
      var vol = map(mic.getLevel()*1000, 0, 400, 0, 50);
      // var vol = mic.getLevel();
      var fOutput = map(f10 + f11, 0, 50, minF, maxF);
      var volOutput = map(vol, 0, 50, minV, maxV);
      // console.log("vol: " + vol);

      if (vol > 7) {
        freqArray.push(constrain(fOutput, maxF, minF));
        volArray.push(constrain(volOutput, minV, maxV));
        console.log(freqArray);
        console.log(volArray);
      }

      volHistory.push(constrain(volOutput, 0, maxV));
      if (volHistory.length > 15) {
        volHistory.splice(0, 1);
      }

      if (vol > 7) {
        elapsedTime = millis();
      }

      if (currentTime > 1) {
        recSwitch = false;
      }

    }

  } else if (state == 3) {
    endResult();
  }
  pop();

  instructions();

  // console.log("state: " + state);

}

function textStyling() {

  //if current x position is greater than the longest line, use xPos value
  if (xPos >= xBreak) {
    translate(xPos/-2, 35*size - ((3/4)*yPos));
  } else {
    translate(xBreak/-2, 35*size - ((3/4)*yPos));
  }

  //resets all code to 0 at start of draw cycle
  xPos = 0;
  yPos = 0;
  xBreak = 0;

  fill(0, 0, 100);
  noStroke();
}

function endResult() {
  push();
  background(0, 0, 0);
  translate(windowWidth/2, windowHeight/2);
  var spaceTest = 0;
  if (sentence.length > 20) {
    scale(0.8);
  }
  textStyling();

  avgFreqArray = avgArrayValues(freqArray, sentence.length, "freq: ");
  avgVolArray = avgArrayValues(volArray, sentence.length, "vol: ");
  for (var i = 0; i < sentence.length; i++) {
    variableType(sentence.substring(i, i + 1), avgFreqArray[i], avgVolArray[i]);
    if (i > 10 && spaceTest < 1 && sentence.substring(i, i + 1) == " ") {
      spaceTest ++;
      xBreak = xPos;
      yPos += 70*size;
      xPos = 0;
    }
  }
  pop();
}

function mousePressed() {
  elapsedTime = millis();
  if (mouseHover == true) {
    if (state >= 0 && state < 2) {
      state ++;
    } else if (state >= 2 && state < 3){
      state ++;
    } else {
      refresh();
      speechRefresh();
      state = 2;
    }
  }

}

function keyPressed() {
  elapsedTime = millis();
  if (state == 2 && key == ' ' && !recSwitch) {
    speechRefresh();
    voiceListen = !voiceListen;
    recSwitch = !recSwitch;
  } else if (state == 2 && key == ' ' && recSwitch) {
    recSwitch = !recSwitch;
  } else if (state == 3 && key == '2') {
    endResult();
    save('phonetictype.png')
  } else if (state == 3 && key == ' ') {
    refresh();
    speechRefresh();
    state = 2;
  } else if (key == '0') {
    speechRefresh();
  } else if (key == '1') {
    state = 0;
  }
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight - 3);
}

function avgArrayValues(receivedArray, tempX, label) {
  startPos = 0;
  //find out how many values of frequency are mapped to a single letter
  subSet = round(receivedArray.length/tempX);

  //creates a new array at sentence.length with 0s;
  tempArray = zeroArray(tempX);

  // for every element of avgFreqArray
  for (var j = 0; j < tempX; j++) {

    //test to see if adding a subSet will cause it to overshoot freqArray.length
    var x = startPos + subSet;
    if (x < receivedArray.length) {

      //for every k elements in freqArray
      for (var k = startPos; k < (subSet*(j + 1)); k ++) {
        tempArray[j] += (receivedArray[k]/subSet);
      }
      //skip to the next subSet of freqArray
      startPos += subSet;

    } else {

      //for the remainder of the array that doesn't = subSet
      for (var k = startPos; k < receivedArray.length; k++) {
        tempArray[j] += (receivedArray[k])/(receivedArray.length - startPos);
      }
    }
  }
  console.log(label + tempArray);
  return tempArray;
}

function zeroArray(arrayLength) {
  emptyArray = new Array(arrayLength);
  for (var i = 0; i < arrayLength; i ++) {
    emptyArray[i] = 0;
  }
  return emptyArray;
}
