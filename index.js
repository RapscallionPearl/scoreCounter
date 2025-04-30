let homeScore = 0
let guestScore = 0

let homePoints = document.getElementById("homePointsEl")
let guestPoints = document.getElementById("guestPointsEl")

function hPlus1Point() {
    homeScore += 1
    homePoints.textContent = homeScore
}
function hPlus2Point() {
    homeScore += 2
    homePoints.textContent = homeScore
}

function hPlus3Point() {
    homeScore += 3
    homePoints.textContent = homeScore
}

function gPlus1Point() {
    guestScore += 1
    guestPoints.textContent = guestScore
}
function gPlus2Point() {
    guestScore += 2
    guestPoints.textContent = guestScore
}

function gPlus3Point() {
    guestScore += 3
    guestPoints.textContent = guestScore
}