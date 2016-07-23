var STLViewer = function(canvas) {
    this.setCanvas(canvas);
    this.init();
};

STLViewer.prototype.setCanvas = function(canvas) {
    this.canvas = canvas;
    return this;
};

STLViewer.prototype.getCanvas = function() {
    return this.canvas;
};

STLViewer.prototype.setLight = function(light) {
    this.light = light;
    return this;
};

STLViewer.prototype.getLight = function() {
    return this.light;
};

STLViewer.prototype.setCamera = function(camera) {
    this.camera = camera;
    return this;
};

STLViewer.prototype.getCamera = function() {
    return this.camera;
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

STLViewer.prototype.init = function() {
    this.initEngine();
    this.initScene();
    this.initCamera();
    this.initLight();

    // Render scene.
    this.getEngine().runRenderLoop(function () {
        this.getScene().render();
    }.bind(this));

    // Handle window resize events.
    window.addEventListener("resize", function () {
        this.getEngine().resize();
    }.bind(this));
};

STLViewer.prototype.initEngine = function() {
    this.setEngine(new BABYLON.Engine(this.getCanvas(), true));
};

STLViewer.prototype.initScene = function() {
    this.setScene(new BABYLON.Scene(this.getEngine()));
    this.getScene().clearColor = new BABYLON.Color3(0, 0, 0);
};

STLViewer.prototype.initCamera = function() {
    this.setCamera(new BABYLON.ArcRotateCamera("main-camera",  0, 0, 0, new BABYLON.Vector3(0, 0, 0), this.getScene()));
    this.getCamera().setPosition(new BABYLON.Vector3(0, 10, -50));
    this.getCamera().attachControl(this.getCanvas(), true);
};

STLViewer.prototype.initLight = function() {
    this.setLight(new BABYLON.HemisphericLight("main-light", new BABYLON.Vector3(1, 0.5, 0), this.getScene()));
    this.getLight().intensity = 0.7;
};