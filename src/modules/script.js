import { loadImages } from './api.js';
import { clearGallery, removeLastImage, reverseGallery } from './gallery.js';

loadImages();

document.getElementById('clear').addEventListener('click', clearGallery);
document.getElementById('remove').addEventListener('click', removeLastImage);
document.getElementById('reverse').addEventListener('click', reverseGallery);
