/*

Officer: 6612572
CaseNum: 403-3-79687483-6612572

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Packard Avenue.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 231 meters from Courthouse then alert local police by drawing a ForestGreen circle around it with a radius of 231 pixels.
- if Shiffman is in Central Station then the neighbourhood watch must be notified by drawing a Red rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a Orange rectangle covering the area between Reynolds Street, Turing Place, Packard Avenue and Mullenweg Street.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  rect()
  ellipse()
  dist()

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

    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
