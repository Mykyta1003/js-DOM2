export const gallery = document.getElementById('gallery');
let images = [];

export function addImage(imgData) {
    const img = document.createElement('img');
    img.src = imgData.download_url;
    img.alt = imgData.author;
    gallery.appendChild(img);
    images.push(img);
}

export function clearGallery() {
    gallery.innerHTML = '';
    images = [];
}

export function removeLastImage() {
    if (images.length > 0) {
        const lastImage = images.pop();
        gallery.removeChild(lastImage);
    }
}

export function reverseGallery() {
    images.reverse();
    gallery.innerHTML = '';
    images.forEach(img => gallery.appendChild(img));
}
