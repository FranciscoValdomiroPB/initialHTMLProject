var person = {
  firstName: "John",
  lastName: "Doe",
};

console.log(person.firstName);
console.log(person["lastName"]); 

var personOne = new Object();
personOne.firstName = "Jane";
personOne.lastName = "Smith";
console.log(personOne.firstName); 
console.log(personOne["lastName"]);
personOne.speakName = function() {
  return this.firstName + " " + this.lastName;
}
console.log(personOne.speakName()); 

function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
}

var personTwo = new Person("Alice", "Johnson");
console.log(personTwo.firstName); 
console.log(personTwo.lastName); 