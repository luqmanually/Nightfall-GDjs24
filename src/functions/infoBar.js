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
		k.rect(650, 65),
		k.pos(5, 35),
		k.color(40, 40, 40)
	]);

	// Day information

    // Headers
    dayInfoHeader = k.add([
        k.text("Day"),
        k.pos(10, 40),
        k.scale(0.5)
    ]);

    timeLeftToNextHeader = k.add([
        k.text("Until sunset"),
        k.pos(100, 40),
        k.scale(0.5)
    ]);

    powerProductionHeader = k.add([
        k.text("Power produced"),
        k.pos(250, 40),
        k.scale(0.5)
    ]);

    // Text
    dayInfoText = k.add([
        k.text("999"),
        k.pos(10, 60)
    ]);

    timeLeftToNextText = k.add([
        k.text("300s"),
        k.pos(100, 60)
    ]);

    powerProductionText = k.add([
        k.text("100.00k"),
        k.pos(250, 60)
    ]);

	// Updates the texts
	refresh = function(currentScene) {
        console.log("refresh");
	};
};

export default infoBar;