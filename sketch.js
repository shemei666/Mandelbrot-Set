let xoff = 0;
let yoff = 0;
let scale = 100;
function setup()
{
	createCanvas(window.innerWidth,window.innerHeight);
	//translate(width/2,height/2);
	pixelDensity(1);
	textSize(20);
	textStyle(BOLD);


}

function draw() {

	loadPixels();
	for(let x=0;x<width;x++)
	{
		for(let y=0;y<height;y++)
		{

			// let scale = 200;
			// let a = map(x,0,width,-2,2);
			// let b = map(y,0,height,-2,2);

			let a = (x/scale) - ((width/2)/scale)+xoff;
			let b = (y/scale) - ((height/2)/scale)+yoff;

			let ca = a;
			let cb = b;

			let z = 0;
			let n =0;

			while (n < 100)
			{
				na = a*a - b*b;
				nb = 2*a*b;

				a = na + ca;
				b = nb + cb;

				if(abs(a+b)>100)
				{
					break;
				}
				n++
			}
			let bright = 0;
			if(n!=100){
				bright = map(n,0,100,0,255);
			}
			let pix = (x+y*width)*4;
			pixels[pix+0] = floor(bright)/4;
			pixels[pix+1] = floor(bright/6);
			pixels[pix+2] = floor(bright);
			pixels[pix+3] = 255;

		}
	}
	updatePixels();
	fill(255);
	text("W,A,S,D TO MOVE Z,X TO ZOOM",0,40);
}


function keyPressed()
{
	if(key==="W")
	{
		yoff -= 0.08;
	}else if(key==="D")
	{
		xoff += 0.08;
	}else if(key==="A")
	{
		xoff -= 0.08;
	}else if(key ==="S")
	{
		yoff += 0.08;
	}else if(key === "Z")
	{
		scale += 50;
		xoff += 0.05;
	}
	else if(key === "X")
	{
		scale -= 50;
	}
}
