// 3 task

async function fetchDataFromServer(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`ошибка HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Ошибка при загрузке данных с ${url}:`, error);
        throw error;
    }
}

async function fetchMultipleSources() {
    const urls = [
        'https://api.thecatapi.com/v1/images/search', // TheCatAPI
        'https://randomuser.me/api/'                  // RandomUser.me
    ];

    try {
        const results = await Promise.all(urls.map(url => fetchDataFromServer(url)));  // параллельная загрузка
        return results;
    } catch (error) {
        console.error('Ошибка при параллельной загрузке данных:', error);
    }
}

fetchMultipleSources().then(results => {
    console.log('Результаты параллельной загрузки данных:', results);
});

