var carro = [
  {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    cor: "Prata",
  },
  {
    marca: "Honda",
    modelo: "Civic",
    ano: 2020,
    cor: "Preto",
  },
];

for (let caracteristica in carro) {
  console.log(carro[caracteristica].marca);
}

for (let C of carro) {
  console.log(C.ano);
}
