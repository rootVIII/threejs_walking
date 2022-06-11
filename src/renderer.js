import { WebGLRenderer } from 'three';

class Renderer {
    constructor() {
        // antialiasing smoothes jaggies
        this.renderer = new WebGLRenderer({ antialias: true });
        this.renderer.physicallyCorrectLights = true;
        this.renderer.shadowMap.enabled = true;
    }

    createRenderer() {
        return this.renderer;
    }
}

export { Renderer };
