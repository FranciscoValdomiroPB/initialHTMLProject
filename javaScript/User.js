class User {
    constructor(name, fistName) {
        this.name = name;
        this.fistName = fistName;
    }

    speak() {
        console.log(`Hello, my name is ${this.fistName} ${this.name}`);
    }

    //getters and setters
    get fullName() {
        return `${this.fistName} ${this.name}`;
    }
    set fullName(value) {
        const parts = value.split(" ");
        this.fistName = parts.shift();
        this.name = parts.join(" ");
    }
    }
p1 = new User("Doe", "John");
p1.speak();