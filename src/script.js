const gallery = document.getElementById('gallery');
const emptyMessage = document.getElementById('emptyMessage'); // Повідомлення про порожню галерею

// Масив з усіма автомобілями
const cars = [
    {
        url: 'https://cdn.motor1.com/images/mgl/6ZZBGl/s3/lamborghini-urus-by-g-power.jpg',
        name: 'Lamborghini Urus by G-Power',
        characteristics: [
            'Потужність: 640 к.с.',
            '0-100 км/год: 3.6 сек',
            'Максимальна швидкість: 305 км/год',
            'Ціна: $220,000'
        ]
    },
    {
        url: 'https://motorcar.com.ua/wp-content/uploads/2023/07/audi-rs7-by-abt-1200x675.jpg',
        name: 'Audi RS7 by ABT',
        characteristics: [
            'Потужність: 740 к.с.',
            '0-100 км/год: 3.2 сек',
            'Максимальна швидкість: 320 км/год',
            'Ціна: $180,000'
        ]
    },
    {
        url: 'https://apiweb.rolf.ru/storage/thumbnails/large/vehicles/new/320405/be1a299276171ba3d482b01967ea987e.jpg',
        name: 'Mercedes-Benz E-Class 63 AMG',
        characteristics: [
            'Потужність: 603 к.с.',
            '0-100 км/год: 3.3 сек',
            'Максимальна швидкість: 300 км/год',
            'Ціна: $160,000'
        ]
    },
    {
        url: 'https://i.infocar.ua/i/12/6231/1400x936.jpg',
        name: 'BMW M5',
        characteristics: [
            'Потужність: 600 к.с.',
            '0-100 км/год: 3.4 сек',
            'Максимальна швидкість: 305 км/год',
            'Ціна: $130,000'
        ]
    },
    {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1eYPV1zhSb4CJMRKs9TEmRnJ_UZMU2iQQGg&s',
        name: 'Porsche 911 Turbo',
        characteristics: [
            'Потужність: 580 к.с.',
            '0-100 км/год: 2.8 сек',
            'Максимальна швидкість: 320 км/год',
            'Ціна: $170,000'
        ]
    },
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/2018_McLaren_720S_V8_S-A_4.0.jpg/1200px-2018_McLaren_720S_V8_S-A_4.0.jpg',
        name: 'McLaren 720S',
        characteristics: [
            'Потужність: 710 к.с.',
            '0-100 км/год: 2.9 сек',
            'Максимальна швидкість: 341 км/год',
            'Ціна: $300,000'
        ]
    },
    {
        url: 'https://www.autocentre.ua/wp-content/uploads/2019/09/bugatti-chiron-sport-built-for-top-speed-run-3.jpg',
        name: 'Bugatti Chiron Sport',
        characteristics: [
            'Потужність: 1500 к.с.',
            '0-100 км/год: 2.5 сек',
            'Максимальна швидкість: 420 км/год',
            'Ціна: $3,000,000'
        ]
    },
    {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXNVxauqvYzTNwHAPFCOccayujWuVWYG0BA&s',
        name: 'Toyota Supra',
        characteristics: [
            'Потужність: ~340 к.с.',
            '0-100 км/год: 4.3 сек',
            'Максимальна швидкість: 250 км/год',
            'Ціна: $99,600'
        ]
    }
];

// Трекер для поточного індексу завантажених зображень
let currentIndex = 0;
const loadCount = 4; // Кількість зображень для завантаження при натисканні

// Функція для додавання автомобіля до галереї
function addCarToGallery(car) {
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

    car.characteristics.forEach(characteristic => {
        const characteristicItem = document.createElement('p');
        characteristicItem.textContent = characteristic;
        characteristics.appendChild(characteristicItem);
    });

    galleryItem.appendChild(img);
    galleryItem.appendChild(caption);
    galleryItem.appendChild(characteristics);
    gallery.appendChild(galleryItem);
}

// Функція для завантаження перших 4 зображень
function loadInitialImages() {
    gallery.innerHTML = ''; // Очищаємо галерею перед завантаженням
    loadMoreImages(); // Завантажуємо перші 4 зображення
}

// Функція для завантаження наступних 4 зображень при натисканні на кнопку
function loadMoreImages() {
    for (let i = currentIndex; i < currentIndex + loadCount && i < cars.length; i++) {
        addCarToGallery(cars[i]);
    }
    currentIndex += loadCount;

    // Ховаємо повідомлення про порожню галерею, якщо є зображення
    if (gallery.children.length > 0) {
        emptyMessage.style.display = 'none';
    }

    // Ховаємо кнопку, якщо всі зображення завантажені
    if (currentIndex >= cars.length) {
        document.getElementById('loadMoreButton').style.display = 'none';
    }
}

// Функція для очищення галереї
function clearGallery() {
    gallery.innerHTML = ''; // Очищаємо галерею
    currentIndex = 0; // Скидаємо індекс для завантаження
    document.getElementById('loadMoreButton').style.display = 'inline-block'; // Показуємо кнопку знову
    emptyMessage.style.display = 'block'; // Показуємо повідомлення про порожню галерею
}

// Функція для видалення останнього зображення
function removeLastImage() {
    const lastImage = gallery.lastElementChild;
    if (lastImage) {
        gallery.removeChild(lastImage);
        currentIndex--; // Коригуємо індекс після видалення зображення
    }

    // Якщо галерея порожня, показуємо повідомлення
    if (gallery.children.length === 0) {
        emptyMessage.style.display = 'block';
    }
}

// Функція для зміни порядку елементів в галереї на зворотний
function reverseGallery() {
    const items = Array.from(gallery.children);
    gallery.innerHTML = '';
    items.reverse().forEach(item => gallery.appendChild(item));
}

// Завантажуємо лише початкові зображення при завантаженні сторінки
loadInitialImages();
