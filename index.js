const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(){
    let newDrivers1= drivers.slice(0,2);
    return newDrivers1;
}
returnFirstTwoDrivers();
function returnLastTwoDrivers(){
    let newDrivers2= drivers.slice(-2);
    return newDrivers2;
}
returnLastTwoDrivers();
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number) {
    const fare=5;
    return function(fare){return fare*number;}
}
function fareDoubler(fare) {
    return createFareMultiplier(2)(fare);
}
function fareTripler(fare) {
    return createFareMultiplier(3)(fare);
}
function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
}