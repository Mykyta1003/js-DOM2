import { addImage } from './gallery.js';

export async function loadImages() {
    try {
        const response = await fetch('https://picsum.photos/v2/list?page=2&limit=4');
        const data = await response.json();
        data.forEach(addImage);
    } catch (error) {
        console.error('Помилка при завантаженні зображень:', error);
    }
}
