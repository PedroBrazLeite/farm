import './style.css';

import * as THREE from 'https://unpkg.com/three@0.139.2/build/three.module.js';

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
loader.load('plants.gltf', function (gltf) {
	obj = gltf.scene;
	scene.add(gltf.scene);
});
scene.background = new THREE.Color(0xffffff);
var light = new THREE.DirectionalLight(0xffffff, 2);
scene.add(light);
camera.position.set(0, 0.5, 3);
function animate() {
	requestAnimationFrame(animate);
	obj.rotation.y += 0.01;
	renderer.render(scene, camera);
}
animate();
