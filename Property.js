var SAMP = {
    SAMP_1MS: 0.001,
    SAMP_2MS: 0.002,
    SAMP_5MS: 0.005,
    SAMP_10MS: 0.01,
    SAMP_20MS: 0.02,
    SAMP_50MS: 0.05,
    SAMP_100MS: 0.1,
    SAMP_200MS: 0.2,
    SAMP_500MS: 0.5,
    SAMP_1S: 1,
    SAMP_2S: 2,
    SAMP_5S: 5,
    SAMP_10S: 10,
    SAMP_20S: 20,
    SAMP_30S: 30,
    SAMP_1MIN: 60,
    SAMP_2MIN: 120,
    SAMP_5MIN: 300,
    SAMP_10MIN: 600,
    SAMP_20MIN: 1200,
    SAMP_30MIN: 1800,
    SAMP_1HOUR: 3600,
};

var SAMPSTR = {
    SAMP_1MS: "1ms",
    SAMP_2MS: "2ms",
    SAMP_5MS: "5ms",
    SAMP_10MS: "10ms",
    SAMP_20MS: "20ms",
    SAMP_50MS: "50ms",
    SAMP_100MS: "100ms",
    SAMP_200MS: "200ms",
    SAMP_500MS: "500ms",
    SAMP_1S: "1s",
    SAMP_2S: "2s",
    SAMP_5S: "5s",
    SAMP_10S: "10s",
    SAMP_20S: "20s",
    SAMP_30S: "30s",
    SAMP_1MIN: "1min",
    SAMP_2MIN: "2min",
    SAMP_5MIN: "5min",
    SAMP_10MIN: "10min",
    SAMP_20MIN: "20min",
    SAMP_30MIN: "30min",
    SAMP_1HOUR: "1hour",
};

function Sample(form, select) {
    this.form = form;
    this.select = select;
}

Sample.prototype.SetCtrl = function () {
    var ctrl = document.form.elements[this.select];
    if (ctrl != undefined) SetCtrlSelctOption(document.form.elements[this.select], SAMPSTR, "");
}

function Timediv(form, select) {
    this.form = form;
    this.select = select;
}

Timediv.prototype.SetCtrl = function () {
    var ctrl = document.form.elements[this.select];
    if (ctrl != undefined) SetCtrlSelctOption(document.form.elements[this.select], SAMPSTR, "/DIV");
}

// Set option of the form select
function SetCtrlSelctOption(ctrl, obj, pstr) {
    var n = 0;
    for (var i in obj) {
        if (ctrl.options[n] == undefined) {
            ctrl.appendChild(document.createElement("option"));
        }
        ctrl.options[n].text = obj[i] + pstr;
        n++;
    }
}