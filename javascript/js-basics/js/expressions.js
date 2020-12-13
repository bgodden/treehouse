
console.log( getRandomNumber1(1000) );

// Function Declaration - loads before anything is executed, can be called before it's defined (hoisting)
function getRandomNumber1(upper) {
    const randomNumber = Math.floor(Math.random() * upper ) + 1;
    return randomNumber;
}

// Function Expression - not hoisted
const getRandomNumber = function(upper) {
    const randomNumber = Math.floor(Math.random() * upper ) + 1;
    return randomNumber;
};

getRandomNumber(6);