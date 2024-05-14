const actualTemp = 68
const desiredTemp = 68

if (actualTemp < desiredTemp) {
    console.log("run heat")
} else if (actualTemp === desiredTemp) {
    console.log("standby")
} else if (actualTemp > desiredTemp) {
    console.log("run a/c")
}

const tempCelsius = 100
const targetUnit = "k"

switch (targetUnit) {
    case "k":
        console.log(tempCelsius + 273.15);
        break;
    case "f":
        console.log(tempCelsius + 112);
        break;
    case "c":
        console.log(tempCelsius);
        break;
    default:
        console.log("enter temperature");
}