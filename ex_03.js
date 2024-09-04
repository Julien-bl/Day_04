function fillBus (peopleAtBusStops, busSeats) {
let placeLibre = 0
{ if (busSeats === 0)
return -1 }
    for (let i = 0; i <= peopleAtBusStops.length; i++) {
        placeLibre += peopleAtBusStops[i]; 

        if (placeLibre >= busSeats) {
            return i+1; 
        }
    }

    return peopleAtBusStops.length;


}
console.log(fillBus([1, 3, 10, 1], 12))
