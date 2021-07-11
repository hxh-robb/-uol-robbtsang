var dotWidth = 10;
function setup()
{
	createCanvas(800, 600);
	background(0);
	fill(255);
}


function draw()
{
	noStroke();
	// console.log(`draw:mouseIsPressed = ${mouseIsPressed}, pmouseX = ${pmouseX}, pmouseY = ${pmouseY}, mouseX = ${mouseX}, mouseY = ${mouseY}`);
}

function keyPressed(evt){
	//console.log(evt);
	background(0);
}

function mousePressed(evt) {
	//console.log(`mouseIsPressed = ${mouseIsPressed}, pmouseX = ${pmouseX}, pmouseY = ${pmouseY}, mouseX = ${mouseX}, mouseY = ${mouseY}`);
	if ( mouseIsPressed ) {
		if(pmouseX !== undefined && pmouseY !== undefined){
			strokeWeight(dotWidth);
			stroke(255);
			line(pmouseX, pmouseY, mouseX, mouseY);
			noStroke();
		}
		ellipse(mouseX, mouseY, dotWidth , dotWidth);
		oldMouseX = mouseX;
		oldMouseY = mouseY;
	} 
}

function mouseDragged(evt){
	mousePressed(evt);
}