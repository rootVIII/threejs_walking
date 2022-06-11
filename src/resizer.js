function resizer(camera, renderer) {
    console.log('in event listener');
    // Set the camera's aspect ratio
    camera.aspect = window.innerWidth / window.innerHeight;
    // update the camera's frustum
    camera.updateProjectionMatrix();
    // update the size of the renderer AND the canvas
    renderer.setSize(window.innerWidth, window.innerHeight);
    // set the pixel ratio (for mobile devices)
    renderer.setPixelRatio(window.devicePixelRatio);
}

export { resizer };
