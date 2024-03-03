import { Color, Scene } from 'three';

class GameScene {
    constructor() {
        this.scene = new Scene();
        this.scene.background = new Color('skyblue');
    }

    createScene() {
        return this.scene;
    }
}

export { GameScene };
