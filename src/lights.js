import { DirectionalLight, AmbientLight } from 'three';

class Lights {
    constructor() {
        this.ambientLight = new AmbientLight('white', 1);
        this.directionalLight = new DirectionalLight('white', 8);
        this.directionalLight.position.set(50, 50, 50);
        this.directionalLight.castShadow = true;
        this.directionalLight.shadowCameraLeft = -10;
        this.directionalLight.shadowCameraRight = 10;
        this.directionalLight.shadowCameraTop = 10;
        this.directionalLight.shadowCameraBottom = -10;
    }

    createAmbientLight() {
        return this.ambientLight;
    }

    createDirectionalLight() {
        return this.directionalLight;
    }
}

export { Lights };
