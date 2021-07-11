/*

Officer: 6612572
CaseNum: 403-2-92246685-6612572

Case 403 - Cornered - stage 3


We have Shiffman cornered at City Narrows and more help is on the way.
Until our backup arrives the orders are to make sure he stays inside City Narrows

Your job is to indicate that Shiffman (signified by the mouse) is indeed within the North - East - South - West bounds of City Narrows.
Draw a SeaGreen rectangle covering City Narrows for as long as Shiffman is in it.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  rect()
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
    let xLeft = 2661, xRight = 2822, yTop = 187, yBottom=340;
    if( mouseX > xLeft && mouseX < xRight && mouseY > yTop && mouseY < yBottom){
      fill(0x2E,0x8B,0x57);
      rect(xLeft,yTop, xRight - xLeft, yBottom - yTop);
    }


    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
