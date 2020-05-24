/*
 * Author: Noah Weingand and TheCodingTrain
 * Description: Code for the drops of rain that fall on the website. I only changed the color
 *              in this document as I borrowed it from TheCodingTrain. Strictly for aesthetic
 *              use. No profit is being made off of this site. 
 * Date Created: 01/15/2020
*/
function Drop() {
  this.x = random(width);
  this.y = random(-500, -50);
  this.z = random(0, 20);
  this.len = map(this.z, 0, 20, 10, 20);
  this.yspeed = map(this.z, 0, 20, 1, 20);

  this.fall = function() {
    this.y = this.y + this.yspeed;
    var grav = map(this.z, 0, 20, 0, 0.2);
    this.yspeed = this.yspeed + grav;

    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }
  };

  this.show = function() {
    var thick = map(this.z, 0, 20, 1, 3);
    strokeWeight(thick);
    //stroke(138, 43, 226);
    stroke(245, 255, 245)
    line(this.x, this.y, this.x, this.y + this.len);
  };
}