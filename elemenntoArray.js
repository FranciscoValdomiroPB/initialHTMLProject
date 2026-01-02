var valores = [8, 1, 7, 4, 2, 9];
valores.reverse();
for (var pos = 0; pos < valores.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}

var carros = [];
carros[0] = "BMW";
carros[1] = "Fiat";
carros[2] = "Ford";
carros[3] = "Chevrolet";
carros[4] = "Audi";

var motos = new Array("Honda", "Yamaha", "Suzuki", "Kawasaki");

//calcular a media de todos os valores da array valores.

var soma = 0;
for (var i = 0; i < valores.length; i++) {
  soma += valores[i];
}
var media = soma / valores.length;

console.log(`A média dos valores é ${media}`);

//exercicio para descobri o nome maior da array cidades
var cidades = ["Rio de Janeiro", "Manaus", "Belo Horizonte", "Curitiba"];
var maiorCidade = cidades[0];

for (var j = 1; j < cidades.length; j++) {
  if (cidades[j].length > maiorCidade.length) {
    maiorCidade = cidades[j];
  }
}
console.log(`A maior cidade é ${maiorCidade}`);

var arrau = [5, 3, 8, 1, 2];

console.log(
  "Array original: " + arrau + "\nArray depois do Join: " + arrau.join(" | ")
);

console.log(
  "Array depois do Shift (remove o primeiro elemento): " + arrau.shift()
);

console.log("Array depois do Pop (remove o último elemento): " + arrau.pop());
console.log("Índice do elemento 8: " + arrau.indexOf(8));
arrau.push(1000);

// tirar os numeros negativos de uma array
var numeros = [10, -5, 3, -1, 0, 7, -2];
var positivos = [];

for (var i = 0; i < numeros.length; i++) {
  if (numeros[i] >= 0) {
    positivos.push(numeros[i]);
  }
}

console.log("Array original: " + numeros);
console.log("Array com apenas números positivos: " + positivos);

var pessoa = ["joao", "Pedro", "Maria", "Ana", "Carla"];
var gerente = ["david", "marcos"];
// clonar a array
pessoas1 = pessoa.slice(1, 3);
console.log(pessoas1);
console.log(pessoa);

var empresa = pessoa.concat(gerente);
console.log(empresa);

var meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

for (var i = 1; i < 5; i++) {
  var trimestre = i;
  var inicio = (trimestre - 1) * 3;
  var fim = inicio + 3;
  console.log([trimestre] + "º trimestre: " + meses.slice(inicio, fim));
}
