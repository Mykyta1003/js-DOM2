export function addCarToGallery(car) {
    const gallery = document.getElementById('gallery');
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
  
    const img = document.createElement('img');
    img.src = car.url;
    img.alt = car.name;
  
    const caption = document.createElement('p');
    caption.classList.add('caption');
    caption.innerHTML = `<strong>${car.name}</strong>`;
  
    const characteristics = document.createElement('div');
    characteristics.classList.add('characteristics');
    car.characteristics.forEach(char => {
      const p = document.createElement('p');
      p.textContent = char;
      characteristics.appendChild(p);
    });
  
    galleryItem.appendChild(img);
    galleryItem.appendChild(caption);
    galleryItem.appendChild(characteristics);
    gallery.appendChild(galleryItem);
  }
  
  export function clearGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
  }
  
  export function removeLastImage() {
    const gallery = document.getElementById('gallery');
    if (gallery.lastChild) {
      gallery.removeChild(gallery.lastChild);
    }
  }
  
  export function reverseGallery() {
    const gallery = document.getElementById('gallery');
    const items = Array.from(gallery.children).reverse();
    clearGallery();
    items.forEach(item => gallery.appendChild(item));
  }
  
  // script.js
  import { cars } from './cars.js';
  import { addCarToGallery, clearGallery, removeLastImage, reverseGallery } from './gallery.js';
  
  let currentIndex = 0;
  const loadCount = 4;
  
  function loadMoreImages() {
    for (let i = currentIndex; i < currentIndex + loadCount && i < cars.length; i++) {
      addCarToGallery(cars[i]);
    }
    currentIndex += loadCount;
  }
  
  document.getElementById('loadMoreButton').addEventListener('click', loadMoreImages);
  document.getElementById('clearGallery').addEventListener('click', () => {
    clearGallery();
    currentIndex = 0;
  });
  document.getElementById('removeLast').addEventListener('click', removeLastImage);
  document.getElementById('reverseGallery').addEventListener('click', reverseGallery);
  
  window.onload = loadMoreImages;
  