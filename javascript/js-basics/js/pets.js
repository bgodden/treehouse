/*
  Create an array of 'pet' objects.
  Each object should have the following properties:
  name, type, breed, age, and photo
*/
const pets = [
    { name: 'Clancy', type: 'Dog', breed: 'Australian Sheppard', age: 4, photo: 'img/aussie.jpg'},
    { name: 'Mr. Pickles', type: 'Cat', breed: 'Persian', age: 2, photo: 'img/persian.jpg' },
    { name: 'Jerry', type: 'Dog', breed: 'Dachsund', age: 3, photo: 'img/dachshund.jpg' },
    { name: 'Feddie', type: 'Cat', breed: 'Tabby', age: 6, photo: 'img/tabby.jpg' },
    { name: 'Bob', type: 'Dog', breed: 'Pug', age: 8, photo: 'img/pug.jpg' },
    { name: 'Fremont', type: 'Dog', breed: 'Golden', age: 5, photo: 'img/golden.jpg' }
];

let html = '';

for ( let i = 0; i < pets.length; i++ ) {
    let pet = pets[i];
    html += `
        <h2>${ pet.name }</h2>
        <h3>${ pet.type }  | ${ pet.breed }</h3>
        <p> Age: ${ pet.age }</p>
        <img src="${ pet.photo }" alt="${ pet.breed }">
    `
}

console.log(html);

document.querySelector('main').insertAdjacentHTML("beforeend", html);

