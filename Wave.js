//---------------------------------------
// Class Span
//---------------------------------------
function Span(h, l) {
    this.hi = h;
    this.lo = l;
}

Span.prototype.GetCenter = function() {
    return (this.hi - this.lo) / 2;
}

Span.prototype.GetHeight = function () {
    return Math.abs(this.hi - this.lo);
}

//---------------------------------------
// Class Data
//---------------------------------------
function Data(max, min) {
    this.max = max;
    this.min = min;
}

Data.prototype.GetMax = function() {
    return this.max;
}

Data.prototype.GetMin = function () {
    return this.min;
}

Data.prototype.GetAve = function () {
    return (this.max - this.min) / 2;
}

//---------------------------------------
// Class XY
//---------------------------------------
function XY(x, y) {
    this.x = x;
    this.y = y;
}

//---------------------------------------
// Class Data Array
//---------------------------------------
function DataArray() {
    this.dataarray = [];
}

DataArray.prototype.Push = function (data) {
    this.dataarray.push(data);
}

DataArray.prototype.Get = function (index) {
    return this.dataarray[index];
}

DataArray.prototype.GetLength = function() {
    return this.dataarray.length;
}

//---------------------------------------
// Class Wave
//---------------------------------------
function Wave(id) {
    this.canvas = new Canvas(id);
    this.span = new Span(10000, -10000);
    this.dataarray = new DataArray();
    this.samp = SAMP.SAMP_1S;
    this.timediv = SAMP.SAMP_10S;
}

// Set
Wave.prototype.SetSize = function (width, height) {
    this.canvas.SetCanvasSize(width, height);
}

// Set Data
Wave.prototype.SetData = function () {
    var testdata = new TestData(this.canvas.canvas.width, this.dataarray);
}

Wave.prototype.Draw = function (color, line, prot) {

    this.canvas.canvas.width = this.canvas.canvas.width;

    var now = new XY(0, 0);
    var old = new XY(0, 0);

    for (var i = 0; i < this.dataarray.GetLength() ; i++) {
        var data = this.dataarray.Get(i);
        data = this.GetYPosition(data);
        now.x = i;
        now.y = data.min;
        this.canvas.Line(old.x, old.y, now.x, now.y, color, line);
        if (prot == true) this.canvas.Prot(now.x, now.y, 3, color);
        old.x = now.x;
        old.y = now.y;
    }
}

Wave.prototype.GetYPosition = function (data) {
    var canvasheight = this.canvas.GetCanvasHeight();
    var spanheight = this.span.GetHeight();
    var spancenter = this.span.GetCenter();

    var ret = new Data(0, 0);
    ret.max = (canvasheight / 2) - ((canvasheight * data.max) / spanheight);
    ret.min = (canvasheight / 2) - ((canvasheight * data.min) / spanheight);
    return ret;
}

//---------------------------------------
// Class Test Data Create
//---------------------------------------
function TestData(size, dataarray) {
    for (var i = 0; i < size ; i++) {
        //var d = this.GetRandom();
        var d = this.GetSine(i);
        dataarray.Push(new Data(d, d));
    }
}

TestData.prototype.GetRandom = function (i) {
    return Math.random() * 20000 - 10000;;
}

TestData.prototype.GetSine = function (i) {
    return Math.sin(i * 10 * 0.01) * 10000;
}