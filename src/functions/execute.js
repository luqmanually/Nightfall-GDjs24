import { powerGenerators, buildings } from "../data";

export function execute() {
    // Most of the game logic
    (async () => {
        while (true) {
            // Loops until the day is over.
            while (deltaTime >= 0) {
                // Power generation loop
                powerProduction = 0;
                for (let i = 0; i < buildings.length; i++) {
                    let buildingRef = buildings[i]
    
                    if (buildingRef.type == "energy") {
                        powerProduction += powerGenerators[buildingRef.id].powerGeneration
                    }
    
                    await delay(1000);
                };
            }
    
			// Power consumption loop
            //powerConsumption = 0;
            //for (let i = 0; i < playerBuildings.length; i++) {
            //    console.log("hello")
            //};
            
        };
    })();
};