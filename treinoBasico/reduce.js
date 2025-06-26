const listaNumeros = [24, 77, 42, 89, 76, 33, 31, 23, 24, 23, 25, 88, 89, 1];

const reducer = (acumulator,value) => {
    if(value %2 === 0){
        //return acumulator + value;
        return [...acumulator,value]
    }
    return acumulator;
}

const result = listaNumeros.reduce(reducer,[]);
console.log(result)

/*
~~... so
~~foreach nao retorna nada
~~reduce = retorna um valor ou um array menor que o orinigal
~~Map = retorna um array do mesmo tamanho da lista original 
ex: retorna uma lista de nomes retirada de uma lista de objetos
do mesmo tamanho da lista original
*/