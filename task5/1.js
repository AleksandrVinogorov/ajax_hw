'use strict';

const output = document.querySelector('.outputNode')
const submitButton = document.querySelector('.submit');
const pageNumber = document.querySelector('.page-number');
const limitNumber = document.querySelector('.limit');
let pageNumberValue = () => {
    let page = pageNumber.value;
    let limit = limitNumber.value;
    const incorrectPage = 'Номер страницы вне диапазона от 1 до 10';
    const incorrectlimit = 'Лимит вне диапазона от 1 до 10';
    const bothIncorrect = 'Номер страницы и лимит вне диапазона от 1 до 10';

    if ((page < 1 || page > 10 || isNaN(page)) && (limit < 1 || limit > 10 || isNaN(limit))) {
        output.innerHTML = bothIncorrect;
        return;
    } else if (page < 1 || page > 10 || isNaN(page)) {
        output.innerHTML = incorrectPage;
        return;
    } else if (limit < 1 || limit > 10 || isNaN(limit)) {
        output.innerHTML = incorrectlimit;
        return;
    } else {
        fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
		.then((response) => {
			return response.json();
		})
        .then((json) => {
            iconContainer(json)
            saveImagesToData()
		})
		.catch(() => {
			console.log('Ошибка')
		});
    }
}
let iconContainer = (photoUrl) => {
    let collection = String();
    photoUrl.forEach(item => {
        const cardBlock =`<img src="${item.download_url}" style="width: 150px; margin: 30px;"/>`;
        collection += cardBlock;
    });
    output.innerHTML = collection;
}
    let saveImagesToData = () => {
    localStorage.setItem("last_photos", output.innerHTML);
}
    let loadImagesFromData = () => {
        output.innerHTML = localStorage.getItem("last_photos");
        return  output.innerHTML.length > 0;
}
loadImagesFromData()
submitButton.addEventListener('click', pageNumberValue);
