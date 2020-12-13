// const dieRoll = Math.floor(Math.random() * 6 ) + 1;
//
// console.log(`You rolled a ${dieRoll}`);

/*
// Collect input from a user
let lowNumber = prompt("Please enter your low number, friend.");
let highNumber = prompt("Please enter your high number, friend.");
// Convert the input to a number
lowNumber = parseInt(lowNumber);
highNumber = parseInt(highNumber);

if (!lowNumber || !highNumber) {
        console.log("You didn't enter a number in one or more of the prompts. Please think about it and try again.");
} else if (lowNumber >= highNumber) {
    console.log("Your low number was greater than or equal to your high number. Please think about it and try again.");
} else if  (lowNumber && highNumber) {
        // Use Math.random() and the user's number to generate a random number
    const randNum = Math.floor(Math.random() * highNumber - lowNumber + 1 ) + lowNumber;
    console.log(`${randNum} is a random number between ${lowNumber} and ${highNumber}`);
}
*/


// function getRandomNumber (upper) {
//     const randomNumber = Math.floor( Math.random() * upper ) + 1;
//     return randomNumber;
// }
//
// // const dieRoll = getRandomNumber(6);
// // console.log(dieRoll);
//
// console.log( getRandomNumber(6) );
// console.log( getRandomNumber(100) );
// console.log( getRandomNumber(1000) );
// console.log( getRandomNumber(20) );

// Functions Practice Challenge

/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */

const getRandomNumber = (lower, upper) => {
    lower = parseInt(lower);
    upper = parseInt(upper);

    if (!lower || !upper) {
        throw Error("You didn't enter a number in one or more of the prompts. Please think about it and try again.");
    } else if (lower >= upper) {
        throw Error("Your low number was greater than or equal to your high number. Please think about it and try again.");
    } else if (lower && upper) {
        // Use Math.random() and the user's number to generate a random number
        const randNum = Math.floor(Math.random() * upper - lower + 1) + lower;
        console.log(`${randNum} is a random number between ${lower} and ${upper}`);
    }
};

// console.log(getRandomNumber(30, 50));
// console.log(getRandomNumber(3, 100));
// console.log(getRandomNumber(35, 'fifty'));
// console.log(getRandomNumber(300, 50));
