/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	fill('#FFFFFF');
	ellipse(215,150,70,70);
	ellipse(175,150,50,50);
	ellipse(255,150,50,50);

	noStroke();
	fill(255);
	text("cloud", 200, 100);

	//2. a mountain in the distance
	// stroke('#000000');
	fill('#43B047');
	ellipse(600,500,200,500);
	ellipse(500,500,120,400);
	ellipse(700,500,150,400);
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	noStroke();
	fill(255);
	text("mountain", 500, 256);

	//3. a tree
	fill('#53350A');
	rect(835, 320, 60, 112);
	fill('#00EE00');
	triangle(765, 320, 965, 320, 865, 250);
	triangle(785, 280, 945, 280, 865, 210);
	triangle(805, 240, 925, 240, 865, 190);

	noStroke();
	fill(255);
	text("tree", 800, 346);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen
	fill(100, 155, 255);
	rect(150, 432, 100, 576-432);
	

	noStroke();
	fill(255);
	text("canyon", 100, 480);

	//5. a collectable token - eg. a jewel, fruit, coins
	stroke(0);
	strokeWeight(1);
	fill('#FFD700');
	ellipse(450,420,20,20);
	fill('#FFD700');
	ellipse(450,420,15,15);
	text("1", 446.5, 424);

	noStroke();
	fill(255);
	text("collectable item", 400, 400);
}
