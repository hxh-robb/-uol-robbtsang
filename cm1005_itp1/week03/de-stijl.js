const ds = (sketch) => {
    let x = y = 0;
    let w = h = 400;
    
    sketch.setup = () => {
        sketch.createCanvas(w,h);
    }

    sketch.draw = () => {
        console.log('test');
        with(sketch){
            // draw a 1 px border
            stroke("black");
            strokeWeight(1);
            fill("#CCCCCC");
            rect(0,0,400,400);

            strokeWeight(15);
            line(80,0, 80,400);
            line(0,300, 400,300);
            line(360,300, 360,400);
            line(360,350, 400,350);
            
            strokeWeight(30);
            line(0,120, 70,120);

            noStroke();
            fill("red")
            rect(87.5,0,312.5, 292.5);

            fill("blue");
            rect(0,307.5,72.5,400);

            fill("yellow");
            rect(367.5,357.5,400-367.5,400-357.5);
        }
    }
}

let canvDS = new p5(ds, document.querySelector("#de-stijl"));
