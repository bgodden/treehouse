// Global scope
let person = 'Lee';

function greeting() {
    // Function scope
    let person = 'Meg';
    alert(`Hi, ${person}!`);
}

greeting();
alert(`Hi, ${person}!`);
greeting();