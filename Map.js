var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var num = numbers.map(function (value) {
  return value * 2;
});

console.log(num); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

var Employess = [
  { Nome: "Luiz", old: 62 },
  { Nome: "Maria", old: 23 },
  { Nome: "Eduardo", old: 55 },
  { Nome: "Leticia", old: 19 },
  { Nome: "Rosana", old: 32 },
  { Nome: "Wallace", old: 47 },
]; 
var namesEmployess = Employess.map(person => person.Nome);
console.log(namesEmployess); // ['Luiz', 'Maria', 'Eduardo', 'Leticia', 'Rosana', 'Wallace']

var numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var total = numbers1.reduce(function (acumulador, value) {
  acumulador += value;
  return acumulador;
}, 0);
console.log(total); // 55

