import kaboom from 'kaboom';
k = kaboom({
    width: 1600,
    height: 900,
    background: [0, 0, 0]
});

delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

k.loadSprite("bean", "sprites/bean.png");
k.loadSprite("mountain1", "sprites/mountain1.png")
k.loadSprite("mountain2", "sprites/mountain2.png")

k.loadSprite("storage1", "sprites/storage1.png")

//modes
buildMode = false;

// time is measured in seconds, this represents loop
day = 0; nightDuration = 300; dayDuration = 300; deltaTime = 300;
// power is not measured in any units specifically
powerProduction = 0; powerConsumption = 10; powerStored = 0;

// importing other scripts
import { introScenes } from './scenes/introScenes';
import infoBar from './functions/infoBar';
import { execute } from './functions/execute';
import { cycleDayNight } from './functions/cycleDayNight';

// Intro scenes
let started = introScenes();

execute();
cycleDayNight();

// Main scene
k.scene("game", () => {
	topbar = new infoBar();

	const ground = k.add([
		k.rect(width(), 500),
		k.pos(0, 400),
		k.color(100, 100, 100)
	]);

	const bean = k.add([
		k.pos(120, 200),
		k.sprite("bean"),
	]);

	const mountain1 = k.add([
		k.pos(100, 400),
		k.sprite("mountain1"),
		k.scale(1.5),
		k.anchor("botleft")
	])

	const mountain2 = k.add([
		k.pos(300, 400),
		k.sprite("mountain2"),
		k.scale(1.5),
		k.anchor("botleft")
	]);

	const storage1 = k.add([
		k.pos(500, 500),
		k.sprite("storage1"),
		k.scale(1.5),
		k.anchor("center"),
		k.area()
	])
	

	k.onUpdate(() => {
		topbar.refresh();
	});
});

k.go("backstory");