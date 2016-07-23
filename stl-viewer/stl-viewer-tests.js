// Integrate JSMockito with QUnit as per: http://jsmockito.org/
JsMockito.Integration.QUnit();

// Prepare mocks
var babylonEngineMock = JsMockito.mock(Object);
var sceneMock = JsMockito.mock(Object);

QUnit.test('Test constructor sets scene and babylon engine.', function(assert) {
    var stlViewer = new STLViewer(sceneMock, babylonEngineMock);

    assert.equal(
        babylonEngineMock,
        stlViewer.getEngine(),
        "BabylonJS engine set in STL Viewer."
    );

    assert.equal(
        canvasMock,
        stlViewer.getScene(),
        "BabylonJS scene set in STL Viewer."
    );
});



