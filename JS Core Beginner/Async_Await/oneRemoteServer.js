// 1 task

async function fetchDataFromServer(url) {
    try {
        let response = await fetch(url);

        if (!response.ok) {
            throw new Error(`ошибка HTTP: ${response.status}`);
        }

        let data = await response.json();

        return data;
    } catch (error) {
        console.error('Ошибка данных:', error);
        throw error;
    }
}

(async () => {
    const url = 'https://randomuser.me/api/';
    try {
        const user = await fetchDataFromServer(url);
        console.log('Пользователь:', user);
    } catch (error) {
        console.error('Не удалось вывести пользователя:', error);
    }
})();

/* Пользователь: {
  results: [
    {
      gender: 'female',
      name: [Object],
      location: [Object],
      email: 'telse.daniel@example.com',
      login: [Object],
      dob: [Object],
      registered: [Object],
      phone: '0422-4989618',
      cell: '0175-5549521',
      id: [Object],
      picture: [Object],
      nat: 'DE'
    }
  ],
  info: { seed: 'c0196dba9e910559', results: 1, page: 1, version: '1.4' }
}*/

