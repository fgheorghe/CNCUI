var STLViewer = function(engine, scene) {
    this.setScene(scene);
    this.setEngine(engine);
};

STLViewer.prototype.setScene = function(scene) {
    this.scene = scene;
    return this;
};

STLViewer.prototype.setEngine = function(engine) {
    this.engine = engine;
    return this;
};

STLViewer.prototype.getScene = function() {
    return this.scene;
};

STLViewer.prototype.getEngine = function() {
    return this.engine;
};