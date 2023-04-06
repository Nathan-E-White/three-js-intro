import { BoxGeometry, Camera, Mesh, MeshBasicMaterial, Scene, WebGLRenderer } from "three";

/**
 * @author Nathan E White, PhD
 * @type {{AR: number, NPC: number, FPC: number, FOV: number}}
 * @date 2022-06-29
 * @description
 */
const cameraProps = {
    /* Field Of Vision: degrees */
    FOV: 75,
    /* Aspect Ratio: unitless ratio */
    AR: window.innerWidth / window.innerHeight,
    /* Near Plane Clipping: distance */
    NPC: 0.1,
    /* Far Plane Clipping: distance*/
    FPC: 1000
};
const renderSizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

const boxGeometryProps = {
    width: 1,
    height: 1,
    depth: 1,
};

const meshMaterialProps = {
    color: 0x00ff00,
}

const scene = new Scene();
const camera = new Camera(...Object.values(cameraProps));
const renderer = new WebGLRenderer();
renderer.setSize(...Object.values(renderSizes));
document.body.appendChild(renderer.domElement);

const geometry = new BoxGeometry(boxGeometryProps.width, boxGeometryProps.height, boxGeometryProps.depth);
const material = new MeshBasicMaterial(meshMaterialProps);
const cube = new Mesh(geometry, material);

/* Add the cube to the scene */
/* Default add() method inserts object at the origin */
scene.add(cube);

/* Move the camera to a new position, so we can see everything */
camera.position.z = 5;

const animateProps = {
    xRot: 0.01,
    yRot: 0.01,
    cube: cube,
    scene: scene,
    camera: camera
};

const animate = (props) => {
    requestAnimationFrame(animate);
    props.cube.rotation.x += props.xRot;
    props.cube.rotation.y += props.yRot;
    props.renderer.render(props.scene, props.camera);
}

animate(animateProps);