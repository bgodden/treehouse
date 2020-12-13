/*
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correctAnswers = 0;


// 2. Store the rank of a player
let rank;

// 3. Select the <main> HTML element
const element = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
const firstAnswer = prompt("What color is the sky?");
if ( firstAnswer.toUpperCase() === 'BLUE' ) {
    correctAnswers += 1;
}
const secondAnswer = prompt("What color is the  the grass?");
if ( secondAnswer.toUpperCase() === 'GREEN' ) {
    correctAnswers += 1;
}
const thirdAnswer = prompt("What does the chicken cross?");
if ( thirdAnswer.toUpperCase() === 'THE ROAD' ) {
    correctAnswers += 1;
}
const fourthAnswer = prompt("What lang has a snake for mascot?");
if ( fourthAnswer.toUpperCase() === 'PYTHON' ) {
    correctAnswers += 1;
    console.log(firstAnswer, fourthAnswer);
}
const fifthAnswer = prompt("What's the best dessert?");
if ( fifthAnswer.toUpperCase() === 'PIE' ) {
    correctAnswers += 1;
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if ( correctAnswers === 5 ) {
    rank = 'Gold';
} else if ( correctAnswers === 3 || correctAnswers === 4 ) {
    rank = 'Silver';
} else if ( correctAnswers === 1 || correctAnswers === 2 ) {
    rank = 'Bronze';
} else {
    rank = 'No crown';
}

// 6. Output results to the <main> element
element.innerHTML = `<h2><strong>You got ${correctAnswers} out of 5 questions correct.</strong></h2>
<p>Crown earned: <strong>${rank}</strong></p>`