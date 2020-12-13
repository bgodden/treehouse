const getRandomNumber = (upper) => {
    const randomNumber = Math.floor( Math.random() * upper ) + 1;
    return randomNumber;
};

const getArea = (width, length, unit) => {
    const area = width * length;
    return `${area} ${unit}`;
};