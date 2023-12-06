import 'https://unpkg.com/@google/model-viewer/dist/model-viewer.js';

document.addEventListener('DOMContentLoaded', () => {
    // Code to run after the DOM is loaded

    // Example 3D model
    const modelViewer = document.createElement('model-viewer');
    modelViewer.setAttribute('src', 'Assignment - 2 AR in Web\model1.glb');
    modelViewer.setAttribute('alt', 'A 3D model');
    modelViewer.setAttribute('auto-rotate', 'true');
    modelViewer.setAttribute('camera-controls', 'true');

    // Example hotspot
    const hotspot = document.createElement('button');
    hotspot.textContent = 'Click me!';
    hotspot.addEventListener('click', () => {
        // Code to run when the hotspot is clicked
        alert('Hotspot clicked!');
    });

    // Append elements to the body
    document.body.appendChild(modelViewer);
    document.body.appendChild(hotspot);
});
