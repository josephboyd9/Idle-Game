var V = [0, 0, 0, 0, 0];
var BOOST = 1.0;

function incV(ind) {
    //if (V[ind] < 100 && (V[ind] + amount) >= 100)
    //{
    //    setUpgradeHidden(false);
    //}
    V[ind]++;
    updateDisplay()
}

function boost() {
    BOOST += 0.1;
    updateDisplay()
}

function tick() {
    for(var i = 0; i < V.length; i++)
    {
        if(i + 1 < V.length) {
            V[i] += V[i + 1] * BOOST ;
        }
    }
    var new_boost = BOOST - 0.1;
    BOOST = ((new_boost > 1.0) ? new_boost : 1.0);
    setVHidden(2, false);
    updateDisplay();
}

function updateDisplay() {
    for(var i = 0; i < V.length; i++)
    {
        document.getElementById("v".concat(i.toString())).textContent = V[i].toString();
    }
    document.getElementById("boost").textContent = (+((BOOST - 1) * 100).toFixed(2)).toString();
}

function setVHidden(ind, val) {
    document.getElementById("v".concat(ind.toString(), "Button")).hidden = val;
    document.getElementById("v".concat(ind.toString(), "Desc")).hidden = val;
}

var tickTrigger = setInterval(tick, 1000);
