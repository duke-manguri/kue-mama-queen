let greatRatejs = 0;
let goodRatejs = 0;
let boringRatejs = 0;
let disgustingRatejs = 0;

function rater() {
    document.querySelector('#raterTab').style.display = 'block';
    document.querySelector('#great').style.display = 'block';
    document.querySelector('#good').style.display = 'block';
    document.querySelector('#boring').style.display = 'block';
	document.querySelector('#disgu').style.display = 'block';
}

// Renamed from close() to avoid conflict with window.close()
function closeTab() {
    document.querySelector('#raterTab').style.display = 'none';
    document.querySelector('#great').style.display = 'none';
    document.querySelector('#good').style.display = 'none';
    document.querySelector('#boring').style.display = 'none';
	document.querySelector('#disgu').style.display = 'none';
}

function greatRate() {
    greatRatejs += 1;
    document.querySelector('#NumberOfRateG').innerText = greatRatejs;
}

function goodRate() {
    goodRatejs += 1;
    document.querySelector('#NumberOfRateg').innerText = goodRatejs;
}

function boringRate() {
    boringRatejs += 1;
    document.querySelector('#NumberOfRateb').innerText = boringRatejs;
}

function disg() {
	disgustingRatejs += 1;
	document.querySelector('#NumberOfRated').innerText = disgustingRatejs;
}