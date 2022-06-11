import { DirectionalLight, AmbientLight } from 'three';

class Lights {
    constructor() {
        this.ambientLight = new AmbientLight('white', 1);
        this.directionalLight = new DirectionalLight('white', 8);
        this.directionalLight.position.set(10, 10, 10);
        this.directionalLight.castShadow = true;
    }

    createAmbientLight() {
        return this.ambientLight;
    }

    createLight() {
        return this.directionalLight;
    }
}

export { Lights };
