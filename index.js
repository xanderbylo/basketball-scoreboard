let homeScore = 0;
let guestScore = 0;

let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");

function homeSubtractOne() {
    homeScore -= 1;
    homeEl.textContent = homeScore;
}

function homeAddOne() {
    homeScore += 1;
    homeEl.textContent = homeScore;
}

function homeAddTwo() {
    homeScore += 2;
    homeEl.textContent = homeScore;
}

function homeAddThree() {
    homeScore += 3;
    homeEl.textContent = homeScore;
}

function guestAddOne() {
    guestScore += 1;
    guestEl.textContent = guestScore;
}

function guestAddTwo() {
    guestScore += 2;
    guestEl.textContent = guestScore;
}

function guestAddThree() {
    guestScore += 3;
    guestEl.textContent = guestScore;
}