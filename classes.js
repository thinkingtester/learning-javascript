class Cat {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    meow() {
        console.log('Meow!')
    }
    scratch(numberOfTimes) {
        for(let x = 1; x <= numberOfTimes; x++) {
            console.log('Scratch!')
        }
    }
}

const myFirstCat = new Cat('Fluffy', 5)

console.log(myFirstCat)
console.log(myFirstCat.name)

const mySecondCat = new Cat('Bella', 3)

console.log(mySecondCat.age)

myFirstCat.meow()
mySecondCat.meow()

myFirstCat.scratch(4)