let html = '';

let randomValue = () => Math.floor(Math.random() * 256);

function randomRGB (value) {
    return `rgb( ${value()}, ${value()}, ${value()} )`;
}

for (let i = 1; i <= 100; i++ ) {
    html += `<div style="background-color: ${randomRGB(randomValue)}">${i}</div>`;
}

document.querySelector('main').innerHTML = html;