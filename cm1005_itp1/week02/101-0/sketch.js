/*

Officer: 6612572
CaseNum: 101-0-30549351-6612572

Case 101 - The Case of Anna Lovelace
Stage 1 - Central Station

Hi kid, you’re new to this job so lets give you a simple case to get you started.
Our client, a well-known impresario, suspects that their star act,Anna Lovelace,
is involved with some no-good unsavoury characters. I need you to trail her and
identify who she meets.

First you need to pick up Anna’s trail at Central station.

Do this by drawing a rectangle around her.
She’s the woman wearing the red dress.
You can’t miss her.

The rectangle should surround Anna as accurately as possible without
including anything else.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect ()

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	noFill();
	stroke(0);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
	rect(666,104,201,414);

}
