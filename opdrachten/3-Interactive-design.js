"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = canvas.width;
let height = canvas.height;
let radius = Utils.randomNumber(300, 400);
let sunDrawn = false;
let windowLightness = 50;

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
	for (let i = 0; i < 40; i++) {
		let y = Utils.randomNumber(height - 150, height - 500);
		let buildingWidth = Utils.randomNumber(width / 30, width / 10);

		let lightness;
		if (sunDrawn == false) {
			lightness = Utils.randomNumber(1, 10);
		} else {
			lightness = Utils.randomNumber(20, 30);
		}

		context.fillStyle = Utils.hsl(Utils.randomNumber(150, 265), 100, lightness);
		context.fillRect(50 * i + 50, y, buildingWidth, height);

		drawWindows(50 * i + 50, y, buildingWidth, height - y);
	}
}

function drawWindows(buildingX, buildingY, buildingWidth, buildingHeight) {
	// Bereken het aantal rijen en kolommen ramen
	let rows = Math.floor(buildingHeight / 20);
	let cols = Math.floor(buildingWidth / 15);

	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			let x = buildingX + col * 15 + 5;
			let y = buildingY + row * 20 + 5;

			if (sunDrawn == false) {
				windowLightness = context.fillStyle = Utils.hsl(50, 100, 50);
			} else {
				windowLightness = context.fillStyle = Utils.hsl(50, 100, 80);
			}

			context.fillRect(x, y, 10, 10); // Ramen van 10x10 pixels
		}
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
