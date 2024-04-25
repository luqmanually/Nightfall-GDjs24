import kaboom from 'kaboom';

k = kaboom({
    width: 1600,
    height: 900,
    background: [0, 0, 0]
});

import { introScenes } from './scenes/introScenes';

k.loadSprite("bean", "sprites/bean.png");

// Main scene
k.scene("game", () => {
	const bean = k.add([
		k.pos(120, 80),
		k.sprite("bean"),
	]);
	
	const ground = k.add([
		k.rect(width(), 600),
		k.pos(0, 300),
		k.color(100, 100, 100)
	]);
});

introScenes();

k.go("backstory")