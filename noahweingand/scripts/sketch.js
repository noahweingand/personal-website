/*
 * Author: Noah Weingand and TheCodingTrain
 * Description: Code for the canvas and producing drops of rain on the site. I only changed the
 *              CreateCanvas method in this document as I borrowed it from TheCodingTrain. 
 *              Strictly for aesthetic use. No profit is being made off of this site. 
 * Date Created: 01/15/2020
*/
var drops = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  background(31, 31, 31);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}