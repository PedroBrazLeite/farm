import './style.css';

import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var loader = new GLTFLoader();

var obj;
loader.load('farm.gltf', function (gltf) {
	obj = gltf.scene;
	scene.add(gltf.scene);
});
scene.background = new THREE.Color(0xffffff);

var light = new THREE.PointLight(0xffffff, 1);
light.position.set(-8, 0, 12);
var light2 = new THREE.PointLight(0xffffff, 1);
light2.position.set(5, -10, 8);
var light3 = new THREE.PointLight(0xffffff, 1);
light3.position.set(0, 13, 16);

scene.add(light);
scene.add(light2);
scene.add(light3);

camera.position.set(0, 2.5, 10);
function animate() {
	requestAnimationFrame(animate);
	obj.rotation.y += 0.01;
	renderer.render(scene, camera);
}
animate();
