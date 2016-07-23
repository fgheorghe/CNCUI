var STLViewer = function(canvas, engine) {
    this.setCanvas(canvas);
    this.setEngine(engine);
};

STLViewer.prototype.setCanvas = function(canvas) {
    this.canvas = canvas;
    return this;
};

STLViewer.prototype.setEngine = function(engine) {
    this.engine = engine;
    return this;
};

STLViewer.prototype.getCanvas = function() {
    return this.canvas;
};

STLViewer.prototype.getEngine = function() {
    return this.engine;
};