import { World } from './world';

function main() {
    // 1. Create an instance of the World app
    const world = new World();

    // 2. Load models
    world.initModels();

    // 3. Render the scene
    world.update();
}

main();
