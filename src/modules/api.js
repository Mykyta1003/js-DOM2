export async function fetchImages(page = 1, limit = 4) {
    try {
      const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
      return await response.json();
    } catch (error) {
      console.error('Помилка при завантаженні зображень:', error);
      return [];
    }
  }
  