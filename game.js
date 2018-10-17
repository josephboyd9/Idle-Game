var V0 = 0;
var V1 = 0;
var BOOST = 1.0;

function incV0(amount) {
    if (V0 < 100 && (V0 + amount) >= 100)
    {
        setUpgradeHidden(false);
    }
    V0 += amount
}

function shitpost() {
    incV0(1);
    BOOST += 0.01;
    updateDisplay()
}

function upgradeClicker() {
    V1 += 1;
    updateDisplay()
}

function tick() {
    incV0(V1 * BOOST);
    var new_boost = BOOST - 0.1;
    BOOST = ((new_boost > 1.0) ? new_boost : 1.0);
    updateDisplay()
}

function updateDisplay() {
    document.getElementById("v0").textContent = V0.toString();
    document.getElementById("v1").innerText = V1.toString();
    document.getElementById("boost").textContent = (+((BOOST - 1) * 100).toFixed(2)).toString();
}

function setUpgradeHidden(val) {
    document.getElementById("clickerUpgrade").hidden = val;
    document.getElementById("upgradeDesc").hidden = val;
}

var tickTrigger = setInterval(tick, 1000);
