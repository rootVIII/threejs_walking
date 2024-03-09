import { World1 } from './world1';
import { Cam } from './camera';
import { GameScene } from './scene';
import { Renderer } from './renderer';
import { Lights } from './lights';
import { Control } from './controls';

function main() {
    let level = 1;

    // TODO: add logic to decide current level once more levels are added
    if (level === 1) {
        // 0. Init game objects
        const cam = new Cam().createCamera();
        const gameScene = new GameScene('../assets/skybox-blue-sky/').createScene();
        const webRenderer = new Renderer().createRenderer();
        const lights = new Lights();
        const dirLight = lights.createDirectionalLight();
        const ambientLight = lights.createAmbientLight();
        const controller = new Control(cam, webRenderer.domElement).createControl();

        // 1. Create an instance of the first level/World1
        const world = new World1(cam, gameScene, webRenderer, dirLight, ambientLight, controller);

        // 2. Load models
        world.initModels();

        // 3. Render the scene
        world.update();
    }
}

main();
