/*

Officer: 6612572
CaseNum: 403-1-30578621-6612572

Case 403 - Stake out - stage 2

I've gotten hold of a hot tip that Shiffman is hiding out at Stallman's Bar.
We've alerted the local precinct but they cannot act unless they know for certain that he's within 134 meters (pixels) of the spot.

Whenever Shiffman (signified by the mouse) is within 134 pixels of Stallman's Bar - draw a CornflowerBlue ellipse with a radius of 134 around it.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  ellipse()
  dist()
  mouseX
  mouseY

*/

var img;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    image(img,0,0);

    //Write your code below here ...
    let x = (1749+1713)/2;
    let y = (513+476)/2;
    let d = dist(x,y,mouseX,mouseY);
    if(134 > d){
      fill(0x64,0x95,0xed);
      ellipse(x,y,134*2,134*2);
    } 

    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
