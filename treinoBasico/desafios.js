/*1 - Fazer uma função que recebe um numero e diz se ele é par ou impar

const numero = 14;
const receber = (numero) => {
  if (typeof numero !== "number") {
    console.log("1 - Tente novamente");
  } else if (numero % 2 == 0) {
    console.log("1 - O numero e par");
  } else {
    console.log("1 - O numero e impar");
  }
};

receber(3);

// 2 - Varrer um array de numeros e separar em pares e impares

const listaNumeros = [24, 77, 42, 89, 76, 33, 31, 23, 24, 23, 25, 88, 89, 1];
let par = 0;
let impar = 0;

listaNumeros.forEach((element) => {
  if (element % 2 == 0) {
    par++;
  } else {
    impar++;
  }
});

console.log("2 - Essa lista contem ", par, " numeros pares e ", impar, " numeros impares")

// 3 - Percorrer o Array de objetos e retornar um novo Array apenas com os nomes
*/
const people = [
  { name: "João Silva", age: 35 },
  { name: "Maria Santos", age: 42 },
  { name: "Pedro Oliveira", age: 28 },
  { name: "Ana Costa", age: 19 },
  { name: "Carlos Souza", age: 51 },
  { name: "Lucas Ferreira", age: 15 },
  { name: "Julia Lima", age: 12 },
  { name: "Gabriel Santos", age: 17 },
  { name: "Beatriz Alves", age: 8 },
  { name: "Matheus Pereira", age: 14 },
  { name: "Sofia Rodrigues", age: 6 },
  { name: "Thiago Martins", age: 16 }
];

const nomes = people.map(people => people.name)
console.log(nomes)