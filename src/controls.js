import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

class Control {
    constructor(camera, canvas) {
        this.controls = new OrbitControls(camera, canvas);
        this.controls.enableDamping = true;
        this.controls.minDistance = 5;
        this.controls.maxDistance = 15;
        this.controls.enablePan = false;
        this.controls.maxPolarAngle = (Math.PI / 2) - 0.05;
    }

    createControl() {
        return this.controls;
    }
}

export { Control };
