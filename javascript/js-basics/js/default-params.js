function sayGreeting(greeting = 'Greetings', name = 'dear student') {
    return `${greeting}, ${name}`;
}

const getArea = (width, length, unit = 'sq ft') => {
    const area = width * length;
    return `${area} ${unit}`;
};
