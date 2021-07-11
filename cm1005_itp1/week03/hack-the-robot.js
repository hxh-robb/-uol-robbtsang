const htr = (sketch) => {
    let x = y = 0;
    let w = h = 400;
    
    sketch.setup = () => {
        sketch.createCanvas(w,h);
    }

    // draw the robot head from the scratch
    sketch.draw = () => {
        with(sketch){
            // draw a 1 px border
            stroke("black");
            strokeWeight(1);
            noFill();
            rect(0,0,400,400);

            // set weight of the painting brush
            strokeWeight(3);

            // draw a gray rectangle as the main part of the robot head
            /* fill("#CCCCCC");*/ 
            // change the colour of the robot.
            fill("#FFFFFF")
            rect(100, 100, 200, 200, 10);

            // draw the purple rectangle at the top of the robot head
            fill("#CC00CC");
            rect(175, 90, 50, 20);

            // draw a half circle arc above the purple rectangle
            fill("#FFFF00");
            arc(200, 85, 40, 40, PI-0.2, 0.2, OPEN);

            // draw the eyes
            fill("#FFFFFF");
            circle(150, 160, 50);
            circle(250, 160, 50);
            /*
            point(150,160);
            point(250,160);
            */
            // give the robot screwball eyes
            ellipse(160,160, 10, 20);
            ellipse(240,160, 10, 20);

            
            // draw the triangle nose
            fill("#FF0000");
            /* triangle(175, 225, 200, 175, 225, 225); */
            // change the shape of the robot's nose
            line(200, 175, 200, 225);
            line(200, 225, 175, 200);
            line(200, 225, 225, 200);
            

            // draw the ears
            rect(90, 150, 20, 65);
            rect(290, 150, 20, 65);


            // draw the mouth
            line(140, 250, 160, 270);
            line(160, 270, 180, 250);
            line(180, 250, 200, 270);
            line(200, 270, 220, 250);
            line(220, 250, 240, 270);
            line(240, 270, 260, 250);

        }
    }
}

let canvHTR = new p5(htr, document.querySelector("#hack-the-robot"));