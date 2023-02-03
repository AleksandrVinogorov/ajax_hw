'use strict';

const outputNode = document.querySelector('.output')
const output = document.querySelector('.outputNode')
const submitButton = document.querySelector('.submit');
const inputNode = document.querySelector('.input')


function useRequest(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log('Статус ответа: ' + xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback){
                callback(result);
            }
        }
    }
    // обработчик ошибки
    xhr.onerror = () => {
        console.log('Ошибка. Статус ответа ' + xhr.status)
    }
    // вызов
    xhr.send()
}
function displayResult(apiData) {
    const incorrect = 'число вне диапазона от 1 до 10';
    let answer = Number(inputNode.value)
    let cards = '';
    if (answer < 1 || answer > 10){
        output.innerHTML = incorrect;
    } else {
        apiData.forEach(item => {
            const cardBlock = `
              <div class="card">
                <img
                  src="${item.download_url}"
                  class="card-image"
                />
                <p>${item.author}</p>
              </div>
            `;
            cards = cards + cardBlock;
          });
          output.innerHTML = cards;
    }
}
submitButton.addEventListener('click', () => {
	useRequest(`https://picsum.photos/v2/list/?limit=${parseInt(inputNode.value)}`, displayResult);
});

