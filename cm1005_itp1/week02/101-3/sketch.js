/*

Officer: 6612572
CaseNum: 101-3-64669872-6612572

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Olive Drab filled rectangle with a Lime outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Orange Red filled
rectangle with a Lime outline around him.

Identify the man reading the newspaper by drawing a Midnight Blue filled rectangle
with a Dark Orchid outline around him.

Identify the woman with the dog by drawing a Blue filled rectangle with a
Dark Red outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
	stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
	fill(0x6b,0x8e,0x23,100); // Olive Drab
	stroke(0x00,0xff,0x00); // Lime
	rect(32,35,252-32,491-35); // Anna

	fill(0xff,0x45,0x00,100); // Orange Red
	stroke(0x00,0xff,0x00); // Lime
	rect(1310,191,1462-1310,396-191); // the man with the monocle smoking the cigar

	fill(0x19,0x19,0x70,100); // Midnight Blue
	stroke(0x99,0x32,0xcc); // Dark Orchid
	rect(393,140,556-393,464-140); // the man reading the newspaper

	fill(0x00,0x00,0xff,100); // Blue
	stroke(0x8b,0x00,0x00); // Dark Red
	rect(1000,59,1215-1000,530-59); // the woman with the dog

}
