const powerList = document.querySelector("#powerList");

const activateFlight = document.querySelector("#activate-flight");
const activateMindreading = document.querySelector("#activate-mindreading");
const activateXray = document.querySelector("#activate-xray");

const flight = document.querySelector("#flight");
const mindreading = document.querySelector("#mindreading");
const xray = document.querySelector("#xray");

const activateAll = document.querySelector("#activateAll");
const deactivateAll = document.querySelector("#deactivateAll");



function handleFlight() {
    flight.classList.toggle("enabled")
    flight.classList.toggle("disabled")
}
function handleMindreading() {
    mindreading.classList.toggle("enabled")
    mindreading.classList.toggle("disabled")
}
function handleXray() {
    xray.classList.toggle("enabled")
    xray.classList.toggle("disabled")
}



activateFlight.addEventListener("click", handleFlight)

activateMindreading.addEventListener("click", handleMindreading)

activateXray.addEventListener("click", handleXray)



activateAll.addEventListener("click", function activateAll() {
    for (let i = 0; i < powerList.children.length; i++) {
        powerList.children[i].classList.add("enabled");
        powerList.children[i].classList.remove("disabled");
    }
});


deactivateAll.addEventListener("click", function deactivateAll() {
    for (let i = 0; i < powerList.children.length; i++) {
        powerList.children[i].classList.add("disabled");
        powerList.children[i].classList.remove("enabled");
    }
});

activateAll.addEventListener("click", activateAll);
deactivateAll.addEventListener("click", deactivateAll);