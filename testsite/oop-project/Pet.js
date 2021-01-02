class Pet {
    constructor(animal, age, breed, sound) {
        this.animal = animal;
        this.age = age;
        this.breed = breed;
        this.sound = sound;
    }

    get activity() {
        const today = new Date();
        const currentHour = today.getHours();

        if (currentHour > 8 && currentHour <= 20) {
            return 'playing';
        } else {
            return 'sleeping';
        }
    }

    get owner() {
        return this._owner;
    }

    set owner(owner) {
        this._owner = owner;
        console.log(`Setter has been called: ${owner}`)
    }

    speak() {
        console.log(this.sound);
    }

}

class Owner {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    get phone() {
        return this._phone;
    }

    set phone(phone) {
        const phoneNormalized = phone.replace(/[^0-9]/g, '');
        this._phone = phoneNormalized;
    }

}

const ernie = new Pet('dog', 1, 'pug', 'yip yip');
const vera = new Pet('dog', 1, 'border collie', 'woof woof');

console.log(ernie, vera);

ernie.speak();
vera.speak();

console.log(vera.activity);

ernie.owner =  new Owner('Jimbo', '123 Main St.');
ernie.owner.phone = '(555) 555-5555';

console.log(ernie.owner);