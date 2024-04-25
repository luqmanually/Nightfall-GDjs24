import kaboom from 'kaboom';
k = kaboom({
    width: 1600,
    height: 900,
    background: [0, 0, 0]
});


k.loadSprite("bean", "sprites/bean.png");
k.loadSprite("mountain1", "sprites/mountain1.png")
k.loadSprite("mountain2", "sprites/mountain2.png")

// time is measured in seconds, this represents loop
day = 0; nightDuration = 300; dayDuration = 300; 
// power is not measured in any units specifically
powerProduction = 0; powerConsumption = 0; powerStored = 0;

// importing other scripts
import { introScenes } from './scenes/introScenes';
import infoBar from './functions/infoBar';

// Intro scenes
introScenes();

// Main scene
k.scene("game", () => {
	new infoBar();

	const bean = k.add([
		k.pos(120, 200),
		k.sprite("bean"),
	]);

	const mountain1 = k.add([
		k.pos(100, 400),
		k.sprite("mountain1"),
		k.scale(3),
		k.anchor("botleft")
	])

	const mountain2 = k.add([
		k.pos(300, 400),
		k.sprite("mountain2"),
		k.scale(3),
		k.anchor("botleft")
	]);
	
	const ground = k.add([
		k.rect(width(), 500),
		k.pos(0, 400),
		k.color(100, 100, 100)
	]);
});

k.go("backstory");