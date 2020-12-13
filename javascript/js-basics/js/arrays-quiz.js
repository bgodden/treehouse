// 1. Create a multidimensional array to hold quiz questions and answers
const quizQandA = [
    ['How many  planets are in the solar system?', '8'],
    ['How many continents are there?', '7'],
    ['How many legs does an insect have?', '6'],
    ['When was Javascript invented?', '1995']
]

// console.log(quizQandA[0]);
// console.log(quizQandA[1]);
// console.log(quizQandA[2]);

// 2. Store the number of questions answered correctly
let correctAnswers = 0;
let correct = [];
let incorrect = [];
/*
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
function createListItems( arr ) {
    let items = '';
    for ( let i = 0; i < arr.length; i++ ) {
        items += `<li>${ arr[i] }</li>`;
    }
    return items;
}

for ( let i = 0; i < quizQandA.length; i++ ) {
    let question = quizQandA[i][0];
    let answer = quizQandA[i][1];
    const response = prompt(question);
    if ( response === answer ) {
        correctAnswers++;
        correct.push(`${question} Your answer: ${response} correct answer: ${answer}`);
        console.log(correct);
    } else {
        incorrect.push(`${question} Your answer: ${response} correct answer: ${answer}`);
        console.log(incorrect);
    }
}
// console.log(correctAnswers);
message = `
    <h1>You got ${correctAnswers} question(s) correct of ${quizQandA.length}, y'all.</h1>
    <h2>You got these questions right:</h2>
    ${createListItems(correct)}
    <h2>You got these questions wrong:</h2>
    ${createListItems(incorrect)}
`

// 4. Display the number of correct answers to the user
document.querySelector('main').innerHTML = message;
