// new usado para criar uma nova instancia
//função
new funcao(parametro);
new funcao() = (parametro) => {
  //faz alguma coisa
  return "alguma coisa";
};

export let endereco = (nome, numeroCasa, nomeRua) => [
  { nome: nome, numero: numeroCasa, rua: nomeRua },
];

//variavel
const numero = 1;
const nome = "Credonísio";
let idade = 795;
const numeroCasa = 112;
const nomeRua = "Rua Esmeralda";

// objetos
const obj = (nome, idade) => {
  nome = "Credonósio";
  idade = 1;
};

const cidadao = (nome, idade, endereco) => [
  { nome: "Credonísio", idade: 17, endereco: "rua A" },
  { nome: "Delicionísio", idade: 18, endereco: "rua A" },
  { nome: "Docenísio", idade: 30, endereco: "rua A" },
  { nome: "Amargonísio", idade: 99, endereco: "rua A" },
];
