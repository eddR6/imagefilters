let imginput;
let infore;
let inback;
let canvasout = document.getElementById("imgout");
let greyimg = null;
let rgbtin = null;
let rain = null;
let temp = null;
let temp2=null;
let temp3=null;
let canvasinput = document.getElementById("imgcanvas");
let canvas1 = document.getElementById("foreinp");
let canvas2 = document.getElementById("backinp");
let canvas3 = document.getElementById("finalout");

function drawcanvas() {

	let img = document.getElementById("imginput");
	imginput = new SimpleImage(img);
	greyimg = new SimpleImage(img);
	rgbtin = new SimpleImage(img);
	rain = new SimpleImage(img);

	imginput.drawTo(canvasinput);
}

function draw1() {

	let img = document.getElementById("imginput2");
	infore = new SimpleImage(img);
	infore.drawTo(canvas1);
}
function draw2() {

	let img = document.getElementById("imginput3");
	inback = new SimpleImage(img);
	inback.drawTo(canvas2);
}

function grey() {
	for (var pi of greyimg.values()) {
		var op = imginput.getPixel(pi.getX(), pi.getY());
		greyimg.setPixel(pi.getX(), pi.getY(), op);
	}



	for (let pix of greyimg.values()) {
		var avg = (pix.getRed() + pix.getGreen() + pix.getBlue()) / 3;
		pix.setRed(avg);
		pix.setGreen(avg);
		pix.setBlue(avg);
	}

	greyimg.drawTo(canvasout);


}

function reset() {
	let ctx = canvasout.getContext('2d');
	ctx.clearRect(0, 0, canvasout.width, canvasout.height);

}

function rgbtint() {
	let red = document.getElementById("red");
	let green = document.getElementById("green");
	let blue = document.getElementById("blue");
	for (var pi of rgbtin.values()) {
		var op = imginput.getPixel(pi.getX(), pi.getY());
		rgbtin.setPixel(pi.getX(), pi.getY(), op);
	}

	for (let pix of rgbtin.values()) {
		pix.setRed(pix.getRed() + parseInt(red.value));
		pix.setGreen(pix.getGreen() + parseInt(green.value));
		pix.setBlue(pix.getBlue() + parseInt(blue.value));

	}
	rgbtin.drawTo(canvasout);

}

function rainbow() {
	for (var pi of rain.values()) {
		var op = imginput.getPixel(pi.getX(), pi.getY());
		rain.setPixel(pi.getX(), pi.getY(), op);
	}
	for (var pix of rain.values()) {
		if (pix.getY() < rain.getHeight() / 7) {
			pix.setRed(pix.getRed() + 148);
			pix.setBlue(pix.getBlue() + 211);

		} else if (pix.getY() >= rain.getHeight() / 7 && pix.getY() < rain.getHeight() * 2 / 7) {
			pix.setBlue(pix.getBlue() + 130);
			pix.setRed(pix.getRed() + 75);
		} else if (pix.getY() >= rain.getHeight() * 2 / 7 && pix.getY() < rain.getHeight() * 3 / 7) {
			pix.setBlue(255);

		} else if (pix.getY() >= rain.getHeight() * 3 / 7 && pix.getY() < rain.getHeight() * 4 / 7) {
			pix.setGreen(255);
		} else if (pix.getY() >= rain.getHeight() * 4 / 7 && pix.getY() < rain.getHeight() * 5 / 7) {
			pix.setRed(255);
			pix.setGreen(255);
		} else if (pix.getY() >= rain.getHeight() * 5 / 7 && pix.getY() < rain.getHeight() * 6 / 7) {
			pix.setRed(255);
			pix.setGreen(127);
		} else if (pix.getY() >= rain.getHeight() * 6 / 7 && pix.getY() <= rain.getHeight()) {
			pix.setRed(255);

		}
	}
	rain.drawTo(canvasout);


}

function forebackgreen() {
	temp = new SimpleImage(infore.getWidth(), infore.getHeight());
	for (var pix of infore.values()) {
		let r = pix.getRed();
		let g = pix.getGreen();
		let b = pix.getBlue();
		let red = parseInt(document.getElementById("red2").value);
		let green = parseInt(document.getElementById("green2").value);
		let blue = parseInt(document.getElementById("blue2").value);
		if ((r < red + 70) && (r > red - 70) && (g < green + 40) &&( g > green - 125) && (b < blue + 70) && (b > blue - 70))
		{
			var op = inback.getPixel(pix.getX(), pix.getY());
			temp.setPixel(pix.getX(), pix.getY(), op);
		} else {
			temp.setPixel(pix.getX(), pix.getY(), pix);
		}
	}

	temp.drawTo(canvas3);
}


function forebackwhite() {
	temp2 = new SimpleImage(infore.getWidth(), infore.getHeight());
	for (var pix of infore.values()) {
		let r = pix.getRed();
		let g = pix.getGreen();
		let b = pix.getBlue();
		let red = parseInt(document.getElementById("red2").value);
		let green = parseInt(document.getElementById("green2").value);
		let blue = parseInt(document.getElementById("blue2").value);
		if ((r < red + 20) && (r > red - 30) && (g < green + 20) &&( g > green - 30) && (b < blue + 20) && (b > blue - 30))
		{
			var op = inback.getPixel(pix.getX(), pix.getY());
			temp2.setPixel(pix.getX(), pix.getY(), op);
		} else {
			temp2.setPixel(pix.getX(), pix.getY(), pix);
		}
	}

	temp2.drawTo(canvas3);
}
function forebackblue() {
	temp3 = new SimpleImage(infore.getWidth(), infore.getHeight());
	for (var pix of infore.values()) {
		let r = pix.getRed();
		let g = pix.getGreen();
		let b = pix.getBlue();
		let red = parseInt(document.getElementById("red2").value);
		let green = parseInt(document.getElementById("green2").value);
		let blue = parseInt(document.getElementById("blue2").value);
		if ((r < red + 70) && (r > red - 100) && (g < green + 70) &&( g > green - 70) && (b < blue + 40) && (b > blue - 125))
		{
			var op = inback.getPixel(pix.getX(), pix.getY());
			temp3.setPixel(pix.getX(), pix.getY(), op);
		} else {
			temp3.setPixel(pix.getX(), pix.getY(), pix);
		}
	}

	temp3.drawTo(canvas3);
}