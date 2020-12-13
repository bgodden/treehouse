const secPerMin = 60;
const minPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52;

const secondsPerDay = secPerMin * minPerHour * hoursPerDay;

console.log(`There are ${secondsPerDay} seconds per day.`);

const yearsAlive = 55;
const secAlive = secondsPerDay * daysPerWeek * weeksPerYear * yearsAlive;

console.log(`I have been alive for more than ${secAlive} seconds!`)
