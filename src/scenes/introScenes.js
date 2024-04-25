// All the intro scenes are here.

function introText(titleText, proceedText) {
	k.add([
		k.text(titleText, { align: "center"}),
		k.pos(800, 300),
		k.anchor("center"),
		k.scale(2)
	])

	k.add([
		k.text(proceedText),
		k.pos(800, 800),
		k.anchor("top")
	]);
}

export function introScenes() {
    k.scene("backstory", () => {
        introText("Nightfall", "Press space to proceed...");
    
        const story = k.add([
            k.text("Some Backstory: \n You are in charge of managing a civilisation \n that can only generate energy during the day.", { align: "center" }),
            k.pos(k.width() / 2, k.height() /2),
            k.anchor("top")
        ]);
    
        onKeyPress("space", () => {
            k.go("mission");
        });
    })
    
    k.scene("mission", () => {
        introText("Nightfall", "Press space to begin");
    
        const story = k.add([
            k.text("Your Mission: \n Help them store adequate energy to survive the night. \n (Easier said than done)", { align: "center" }),
            k.pos(k.width() / 2, k.height() /2),
            k.anchor("top")
        ]);
    
        onKeyPress("space", () => {
            k.go("game");
            return "started";
        });
    })
}