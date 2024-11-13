"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = canvas.width;
let height = canvas.height;
let radius = Utils.randomNumber(300, 400);
let sunDrawn = false;

draw();

function draw() {
	context.fillStyle = "#363330";
	context.fillRect(0, 0, width, height);

	if (Math.random() < 0.6) {
		drawSun();
		sunDrawn = true;
	} else {
		sunDrawn = false;
	}

	drawSkyline();
}

function drawSkyline() {
	for (let i = 0; i < 15; i++) {
		let y = Utils.randomNumber(height - 150, height - 500);
		let buildingWidth = Utils.randomNumber(width / 30, width / 10);

		let lightness;
		if (sunDrawn == false) {
			lightness = Utils.randomNumber(1, 10);
		} else if ((sunDrawn = true)) {
			lightness = Utils.randomNumber(30, 50);
		} else if (radius < 350) {
			lightness = Utils.randomNumber(15, 25);
		}

		context.fillStyle = Utils.hsl(Utils.randomNumber(150, 265), 100, lightness);
		context.fillRect(100 * i + 25, y, buildingWidth, height);
	}
}

function drawSun() {
	let sunColor;
	if (radius < 350) {
		sunColor = Utils.randomNumber(40, 50);
	} else {
		sunColor = Utils.randomNumber(50, 60);
	}

	context.fillStyle = Utils.hsl(sunColor, 100, 50);
	Utils.fillEllipse(width / 2, height, radius + 50, radius);
}
