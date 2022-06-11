import { Color, Scene } from 'three';

class Scenario {
    constructor() {
        this.scene = new Scene();
        this.scene.background = new Color('skyblue');
    }

    createScene() {
        return this.scene;
    }
}

export { Scenario };
