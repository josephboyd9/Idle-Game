var v0 = 0;
var v1 = 1;
var boost = 1.0;

function shitpost() {
    v0++;
    boost += 0.01;
    updateDisplay()
}

function upgradeClicker() {
    v1 += 1;
    updateDisplay()
}

function tick() {
    v0 += v1 * boost;
    var new_boost = boost - 0.1;
    boost = ((new_boost > 1.0) ? new_boost : 1.0);
    updateDisplay()
}

function updateDisplay() {
    document.getElementById("v0").textContent = v0.toString();
    document.getElementById("v1").innerText = v1.toString();
    document.getElementById("boost").textContent = ((boost - 1) * 100).toString();
}

var tickTrigger = setInterval(tick, 1000);
