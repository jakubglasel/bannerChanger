//Parametry
let activeElement = 0;
const timeChange = 6000;

// Pobieramy 4 elementy na których pracujemy
const colorImgHtml = document.querySelector('.imgColor');
const grayImgHtml = document.querySelector('.imgBW');
const h1Html = document.querySelector('.item');
const h2Html = document.querySelector('.itemInfo');

//Informacje w tablicach o elementach podmienianych
const colorImages = ["./img/gpuAlphaColor.png", "./img/mbAlphaColor.png", "./img/psuAlphaColor.png"];
const grayImages = ["./img/gpuAlphaBW.png", "./img/mbAlphaBW.png", "./img/psuAlphaBW.png"];
const item = ["Best GPU's on The Market", "Only MotherBoards you can trust", "Golden 90W standarts PSU's"];
const info = ["All our cards are overclocked and tested in our Lab. To make sure that you will always be satified with your purchase.", "We are testing all MB in the market and pick only the ones we are happy with.", "When you need solid and uniterrupted power flow, you can count on our PSU choices"];

function changeElement() {
    activeElement++;
    if (activeElement == colorImages.length) {
        activeElement = 0;
    }
    colorImgHtml.src = colorImages[activeElement];
    grayImgHtml.src = grayImages[activeElement];
    h1Html.textContent = item[activeElement];
    h2Html.textContent = info[activeElement];

}

setInterval(changeElement, timeChange)