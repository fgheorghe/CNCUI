// Integrate JSMockito with QUnit as per: http://jsmockito.org/
JsMockito.Integration.QUnit();

// Prepare mocks
var canvasMock = JsMockito.mock(Object);
var babylonEngineMock = JsMockito.mock(Object);

QUnit.test('Test constructor sets canvas and babylon engine.', function(assert) {
    var stlViewer = new STLViewer(canvasMock, babylonEngineMock);

    assert.equal(
        canvasMock,
        stlViewer.getCanvas(),
        "Canvas DOM element set in STL Viewer."
    );

    assert.equal(
        babylonEngineMock,
        stlViewer.getEngine(),
        "BabylonJS engine set in STL Viewer."
    );
});



