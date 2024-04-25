export function cycleDayNight() {
    let isDay = true;

    function updateCycle() {
        if (isDay) {
            console.log("Sunrise");
            setTimeout(() => {
                console.log("Sunset");
                isDay = false;
                updateCycle();
            }, dayDuration * 1000);
        } else {
            console.log("Sunset");
            setTimeout(() => {
                console.log("Sunrise");
                isDay = true;
                updateCycle();
            }, nightDuration * 1000);
        }
    }

    updateCycle();
}