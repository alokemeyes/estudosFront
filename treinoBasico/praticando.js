const endereco = (nome, numeroCasa, nomeRua) => {
    const endereco1 = {nome,numeroCasa,nomeRua}
    return endereco1
}

const nome = "Credonísio";
let idade = 79;
const numeroCasa = 112;
const nomeRua = "Rua Esmeralda";

const result = endereco(nome, numeroCasa, nomeRua);

console.log("Endereco adicionado com sucesso: ", result);

var a = 1;
if(true){
    var a = 2;
    console.log(a);
if(true){
    let a = 3;
    console.log(a);
}
}
console.log(a);