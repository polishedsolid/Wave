// Gloval
document.write("<script type='text/javascript' src='Grid.js'><\/script>");
document.write("<script type='text/javascript' src='Canvas.js'><\/script>");
document.write("<script type='text/javascript' src='Wave.js'><\/script>");
document.write("<script type='text/javascript' src='Property.js'><\/script>");

function Initial(form, samp, timediv, canvas) {

    var sample = new Sample(form, samp);
    sample.SetCtrl();

    var timediv = new Timediv(form, timediv);
    timediv.SetCtrl();

    var grid = new Grid(canvas);
    grid.SetSize(800, 400);
    grid.Draw('black', '#444444');
}

function Initial2(canvas) {
    var wave = new Wave(canvas);
    wave.SetSize(800, 400);
    wave.SetData();
    wave.Draw('Red', 2, true);
}