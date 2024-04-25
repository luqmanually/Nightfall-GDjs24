import { numRound } from "../functions/numRound";

class infoBar {
	// Command keys
	gameCommandText = k.add([
		k.text("[Q] Game"),
		k.pos(0, 5),
		k.color(150, 150, 150),
		k.scale(0.75),
		k.area()
	]);

	progressCommandtext = k.add([
		k.text("[W] Energy Dashboard"),
		k.pos(150, 5),
		k.color(150, 150, 150),
		k.scale(0.75),
		k.area()
	]);

	// Information
	infoFrame = k.add([
		k.rect(650, 50),
		k.pos(5, 35),
		k.color(40, 40, 40)
	]);

	// Day information
    dayInfoHeader = k.add([
        k.text("Day"),
        k.pos(10, 40),
        k.scale(0.75)
    ])

	// Updates the texts
	refresh = function(currentScene) {
        console.log("refresh");
	};
};

export default infoBar;