function trafficLightSystem(currentSignal, isEmergencyVehicleApproaching) {

  if (isEmergencyVehicleApproaching) {

    return "IMMEDIATE GREEN";

  }


  switch (currentSignal) {

    case "RED":
      return "STOP";

    case "YELLOW":
      return "PREPARE TO STOP";

    case "GREEN":
      return "GO";

    default:
      return "INVALID SIGNAL";

  }

}


// Test Cases

console.log("Test Case 1:");
console.log(
  trafficLightSystem("RED", false)
);

console.log("------------------");


console.log("Test Case 2:");
console.log(
  trafficLightSystem("YELLOW", false)
);

console.log("------------------");


console.log("Test Case 3:");
console.log(
  trafficLightSystem("GREEN", false)
);

console.log("------------------");


console.log("Test Case 4:");
console.log(
  trafficLightSystem("RED", true)
);

console.log("------------------");


console.log("Test Case 5:");
console.log(
  trafficLightSystem("BLUE", false)
);