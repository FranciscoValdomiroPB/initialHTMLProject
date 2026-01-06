var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numerosPares = numeros.filter((par) => par % 2 === 0);
console.log(numerosPares); // [2, 4, 6, 8, 10]
function filter(value) {
  return value % 2 !== 0;
}
var numerosImpares = numeros.filter(filter);
console.log(numerosImpares); // [1, 3, 5, 7, 9]

var numerosMaiorQueCinco = numeros.filter(function (value) {
  return value > 5;
});
console.log(numerosMaiorQueCinco); // [6, 7, 8, 9, 10]

var Employess = [
  { Nome: "Luiz", old: 62 },
  { Nome: "Maria", old: 23 },
  { Nome: "Eduardo", old: 55 },
  { Nome: "Leticia", old: 19 },
  { Nome: "Rosana", old: 32 },
  { Nome: "Wallace", old: 47 },
]; 

var namesEmployess = Employess.filter(function (Employess) {
   
        return Employess.Nome.length === 4;
    });
console.log(namesEmployess); 

var produtos = [
  { id: 1, nome: "Notebook", Tipo: "eletronico", fragil: true },
  { id: 2, nome: "iPad Pro", Tipo: "eletronico", fragil: true },
  { id: 3, nome: "Copo de Vidro", Tipo: "vidro", fragil: true },
  { id: 4, nome: "Copo de Plastico", Tipo: "plastico", fragil: false },
];

var produtosFragil = produtos.filter(function (produtos) {
  return produtos.fragil === true;
});
console.log(produtosFragil);