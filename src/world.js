import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AnimationMixer, Clock, Vector3 } from 'three';
import { Cam } from './camera';
import { Control } from './controls';
import { Lights } from './lights';
import { Plane } from './plane';
import { Renderer } from './renderer';
import { resizer } from './resizer';
import { Scenario } from './scene';

class World {
    constructor() {
        this.cam = new Cam().createCamera();
        this.newScene = new Scenario().createScene();
        this.webRenderer = new Renderer().createRenderer();
        const lights = new Lights();
        this.light = lights.createLight();
        this.ambienceLight = lights.createAmbientLight();
        this.floor = new Plane().createPlane();
        this.newScene.add(this.floor, this.light, this.ambienceLight);
        this.model = null;

        document.getElementById('scene-container').append(this.webRenderer.domElement);
        this.controller = new Control(this.cam, this.webRenderer.domElement).createControl();
        this.controller.update();

        resizer(this.cam, this.webRenderer);
        window.addEventListener('resize', () => {
            resizer(this.cam, this.webRenderer);
        });

        this.mixer = null;
        this.clock = new Clock();
        this.clips = {
            Run: null, Walk: null, Idle: null, WalkBack: null, Punch: null,
        };
        this.currentClip = 'Idle';
        this.pressedUp = this.pressedDown = false;
        this.pressedRight = this.pressedLeft = false;
        this.pressedShift = this.punch = false;
        this.rotationRad = (Math.PI / 180) * 4;
        this.rotationAxis = new Vector3(0, 1, 0);
        document.addEventListener('keydown', this.pressedKey.bind(this), false);
        document.addEventListener('keyup', this.releasedKey.bind(this), false);
    }

    initModels() {
        const loaderGLTF1 = new GLTFLoader();
        loaderGLTF1.loadAsync('../assets/soldierx.glb').then((gltf) => {
            this.model = gltf.scene;
            this.model.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                }
            });
            this.newScene.add(this.model);

            // console.log(gltf.animations);

            this.mixer = new AnimationMixer(this.model);

            for (const animation of gltf.animations) {
                if (animation.name !== 'mixamo.com') {
                    this.clips[animation.name] = this.mixer.clipAction(animation);
                }
            }
            console.log(this.clips);
            this.model.add(this.cam);
            this.light.target = this.model;
        });
    }

    moveWalker() {
        let speed;
        if (this.pressedShift && this.currentClip !== 'WalkBack') {
            speed = 0.1;
        } else {
            speed = 0.02;
        }

        if (this.pressedLeft) {
            this.model.position.x -= speed;
            this.model.rotateOnAxis(this.rotationAxis, this.rotationRad);
        } else if (this.pressedRight) {
            this.model.position.x += speed;
            this.model.rotateOnAxis(this.rotationAxis, -(this.rotationRad));
        } else if (this.pressedUp) {
            this.model.translateZ(-(speed));
        } else if (this.pressedDown) {
            this.model.translateZ(speed);
        }
    }

    transition(action) {
        if (this.currentClip !== action) {
            this.clips[this.currentClip].fadeOut(0.4);
            this.clips[action].reset().fadeIn(0.4).play();
            this.currentClip = action;
        } else {
            this.clips[action].play();
        }
    }

    moved() {
        return this.pressedUp || this.pressedRight || this.pressedLeft;
    }

    animateWalker() {
        if (this.moved()) {
            if (this.pressedShift) {
                this.transition('Run');
            } else {
                this.transition('Walk');
            }
        } else if (this.pressedDown) {
            this.transition('WalkBack');
        } else if (this.punch) {
            this.transition('Punch');
        } else {
            this.transition('Idle');
        }

        this.mixer.update(this.clock.getDelta());
    }

    pressedKey(evt) {
        switch (evt.key) {
        case 'ArrowUp':
            this.pressedUp = true;
            break;
        case 'ArrowDown':
            this.pressedDown = true;
            break;
        case 'ArrowLeft':
            this.pressedLeft = true;
            break;
        case 'ArrowRight':
            this.pressedRight = true;
            break;
        case 'ShiftLeft':
            this.pressedShift = true;
            break;
        case 'Shift':
            this.pressedShift = true;
            break;
        case 'p':
            this.punch = true;
            break;
        default:
            break;
        }
    }

    releasedKey(evt) {
        switch (evt.key) {
        case 'ArrowUp':
            this.pressedUp = false;
            break;
        case 'ArrowDown':
            this.pressedDown = false;
            break;
        case 'ArrowLeft':
            this.pressedLeft = false;
            break;
        case 'ArrowRight':
            this.pressedRight = false;
            break;
        case 'Shift':
            this.pressedShift = false;
            break;
        case 'p':
            this.punch = false;
            break;
        default:
            break;
        }
    }

    update() {
        this.webRenderer.setAnimationLoop(() => {
            if (this.clips.Idle) {
                this.animateWalker();
                this.moveWalker();
            }

            this.webRenderer.render(this.newScene, this.cam);
        });
    }
}

export { World };
