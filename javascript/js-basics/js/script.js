let html = '';
let red;
let green;
let blue;
let randomRGB;

let number = () => Math.floor(Math.random() * 256);

for (let i = 1; i <= 100; i++ ) {
    red = number();
    green = number();
    blue = number();
    randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
    console.log(randomRGB);
    html += `<div style="background-color: ${randomRGB}">${i}</div>`;
}

document.querySelector('main').innerHTML = htscript.jsml;