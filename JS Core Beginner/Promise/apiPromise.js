// 3 task

const urlsArray = [
    "https://letterboxd.com/",
    "https://www.hltv.org/",
    "https://www.youtube.com/"
];

function fetchData(url) {
    return fetch(url).then(response => response.text());
}

function fetchAllData(urlsArray) {
    const promises = urlsArray.map(url => fetchData(url));
    return Promise.all(promises).then(results => {
        return results.reduce((acc, data) => {
            return acc.concat(data);
        }, []);
    });
}

fetchAllData(urlsArray)
    .then(combinedResult => {
        console.log('Combined Result:', combinedResult);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

