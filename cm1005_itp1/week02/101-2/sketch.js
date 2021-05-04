/*

Officer: 6612572
CaseNum: 101-2-86748533-6612572

Case 101 - The Case of Anna Lovelace
Stage 3 - The Docks

You’ve followed Anna down to the docks. She sure frequents some classy places.
Okay let’s see who she’s meeting down there.

Identify Anna by drawing a Olive filled rectangle around her.
She’s the woman in the red dress of course.

Identify the heavy-set man in the fishing overalls by drawing a Medium Purple filled
rectangle around him.

Identify the man in the striped top by drawing a Cyan filled rectangle around
him.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	noStroke();
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
	fill(0x80,0x80,0,100);
	rect(117,109,335-117,563-109);
	fill(0x93,0x70,0xdb,100);
	rect(890,25,1130-890,280-25);
	fill(0x00,0xFF,0xFF,100);
	rect(615,19,711-615,282-19);
}
