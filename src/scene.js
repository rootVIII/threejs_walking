import { CubeTextureLoader, Scene } from 'three';

class GameScene {
    constructor(skyBoxPath) {
        this.scene = new Scene();

        const loader = new CubeTextureLoader();
        loader.setPath(skyBoxPath);
        this.scene.background = loader.load([
            'skybox_px.jpg', 'skybox_nx.jpg',
            'skybox_py.jpg', 'skybox_ny.jpg',
            'skybox_pz.jpg', 'skybox_nz.jpg',
        ]);
    }

    createScene() {
        return this.scene;
    }
}

export { GameScene };
