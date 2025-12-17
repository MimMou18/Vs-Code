let count = 0;
let labelValue = 0;

function increase() {
    count++;

    if (count === 100) {
        labelValue++;   
        count=0;
    }

    updateCounter();
}

function decrease() {
    if (count > 0) {
        count--;
    }
    updateCounter();
}

function reset() {
    count = 0;
    labelValue = 0;
    updateCounter();
}

function updateCounter() {
    document.getElementById("counter").innerHTML = count;
    document.getElementById("label").innerHTML = labelValue;
}