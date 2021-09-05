// import { ARButton } from 'https://unpkg.com/three@0.126.0/examples/jsm/webxr/ARButton.js';

// let camera, scene, renderer;
// let mesh;

// const init = () => {
//     const container = document.createElement('div');
//     document.body.appendChild(container);

//     // Creating a Scene where all will be displayed
//     scene = new THREE.Scene();

//     // Creating a camera
//     camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 40);

//     // Creating the WebGL renderer
//     renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(window.innerWidth, window.innerHeight);

//     renderer.xr.enabled = true;
//     container.appendChild(renderer.domElement);

//     // Light
//     const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
//     light.position.set(0.5, 1, 0.25);
//     scene.add(light);

//     // Polyhedron
//     const geometry = new THREE.IcosahedronGeometry(0.1, 1); // radius and detail(# of vertices)
//     const material = new THREE.MeshPhongMaterial({ 
//         color: new THREE.Color("rgb(226,35,213)"),
//         shininess: 6,
//         flatShading: true,
//         transparent: 1,
//         opacity: 0.8
//     });
//     const mesh = new THREE.Mesh(geometry, material);
//     mesh.position.set(0, 0, -0.5);
//     scene.add(mesh);

//     // Add the AR button to the DOM
//     const button = ARButton.createButton(renderer);
//     console.log(button);
//     document.body.appendChild(button);

//     // Funtion so that whenever you resize the window, it doesn't loose the aspect ratio
//     window.addEventListener('resize', onWindowResize, false);
// }

// const onWindowResize = () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();

//     renderer.setSize(window.innerWidth, window.innerHeight)
// }

// const animate = () => {
//     renderer.setAnimationLoop(render);
// }

// const render = () => {
//     renderer.render(scene, camera)
// }
    
// init();
// animate();