import {
    PlaneBufferGeometry, TextureLoader, Mesh, MeshStandardMaterial, DoubleSide,
} from 'three';

class Plane {
    constructor() {
        const geometry = new PlaneBufferGeometry(2000, 2000, 8, 8);
        const textureLoader = new TextureLoader();
        const texture1 = textureLoader.load('../assets/sand.png');
        const texture2 = textureLoader.load('../assets/bumps.png');
        const texture3 = textureLoader.load('../assets/roughness.png');
        const material = new MeshStandardMaterial({
            map: texture1,
            side: DoubleSide,
            roughness: 1,
            displacementScale: 0.1,
            displacementMap: texture3,
            aoMap: texture2,
        });

        this.plane = new Mesh(geometry, material);
        this.plane.receiveShadow = true;
        this.plane.rotateX(-Math.PI / 2);
    }

    createPlane() {
        return this.plane;
    }
}

export { Plane };
