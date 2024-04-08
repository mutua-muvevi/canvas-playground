const canvas = document.getElementById("myCanvas")

const ctx = canvas.getContext("2d")

const thickness = 10;

let x=0, y=0, w=200, h=400;



let i = 1;

while (i <= 10){
	ctx.beginPath();
	ctx.rect(x, y, w, h);
	ctx.fillStyle = i % 2 === 1 ? "blue" : "white";
	ctx.fill();

	x = x + thickness;
	y = y + thickness;
	w = w - 2 * thickness;
	h = h - 2 * thickness;
	i++;
}