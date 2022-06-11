import { PerspectiveCamera } from 'three';

class Cam {
    constructor() {
        this.camera = new PerspectiveCamera(
            45, // fov = Field Of View
            window.innerWidth / window.innerHeight, // aspect ratio
            0.1, // near clipping plane
            1000, // far clipping plane
        );

        this.camera.position.set(0, 0, 10);
    }

    createCamera() {
        return this.camera;
    }
}

export { Cam };
