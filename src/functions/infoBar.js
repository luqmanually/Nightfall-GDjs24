import { numRound } from "./numRound";

class infoBar {
	// Command keys
	gameCommandText = k.add([
		k.text("[Q] Game"),
		k.pos(0, 5),
		k.color(150, 150, 150),
		k.scale(0.75),
		k.area()
	]);

	overviewCommandText = k.add([
		k.text("[W] Overview"),
		k.pos(150, 5),
		k.color(150, 150, 150),
		k.scale(0.75),
		k.area()
	]);

    energyCommandText = k.add([
		k.text("[E] Energy"),
		k.pos(350, 5),
		k.color(150, 150, 150),
		k.scale(0.75),
		k.area()
	]);

    populationCommandText = k.add([
		k.text("[R] Population"),
		k.pos(525, 5),
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

    powerStoredHeader = k.add([
        k.text("Power stored"),
        k.pos(450, 40),
        k.scale(0.5)
    ])

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

    powerStoredText = k.add([
        k.text("100.00k"),
        k.pos(450, 60)
    ])

    // Buttons


	// Updates whatever needs to be updated
	refresh = function(currentScene) {
        topbar.timeLeftToNextText.text = `${dayDuration}s`

        // Colour according to power production level
        topbar.powerProductionText.text = `${numRound(powerProduction)}`
        if (powerProduction > (powerConsumption * 1.20)) {
            topbar.powerProductionText.color = rgb(47, 231, 22)

        } else if (powerProduction > (powerConsumption * 1.10)) {
            topbar.powerProductionText.color = rgb(228, 231, 22)

        } else if (powerProduction > (powerConsumption * 1.01)) {
            topbar.powerProductionText.color = rgb(231, 180, 22)

        } else {
            topbar.powerProductionText.color = rgb(231, 40,  22)
        }

        topbar.powerStoredText.text = `${numRound(powerStored)}`
	};
};

export default infoBar;