var a = [20, 30, 40, 50, 60];

for (let value of a) {
    console.log(value);
}
a.forEach(value => console.log(value));
var total = 0;
a.forEach(function (value) {
    total += value;
});
console.log(total);