'use strict';

const output = document.querySelector('.outputNode')
const submitButton = document.querySelector('.submit');
const inputWidth = document.querySelector('.width');
const inputHeigth = document.querySelector('.height');

let WidthHeightValue = () => {
    let width = inputWidth.value;
    let height = inputHeigth.value;
    const incorrect = 'Одно из чисел вне диапазона от 100 до 300'

    if ((width < 100 || width > 300 || isNaN(width)) || (height < 100 || height > 300 || isNaN(height))) {
        output.innerHTML = incorrect;
        return;
    } else {
        fetch(`https://picsum.photos/${width}/${height}`)
        .then((response) => response.url)
        .then((url) => {
            iconContainer(url);
        })
    }
}
let iconContainer = (photoUrl) => {
    let container = `<img src="${photoUrl}"/>`;
    output.innerHTML = container;
}
submitButton.addEventListener('click', WidthHeightValue);