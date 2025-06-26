const vari = {name: "Tinao", filhos:[1, 2, "Chrisin", {
    nome:"Douglas"
}]};
typeof vari
console.log(typeof vari)
console.log(vari)
console.log(vari.filhos.forEach(
    (filho)=>{
        console.log(filho)
    }))

    const chamar = () => {
        console.log("CHAMA EU AQUI")
        return true
    }
    console.log(chamar())

    function latir(){
        console.log("LATE EM MIM AQUI")
        return true
    }
    const result = latir()
    console.log(result)

    //nameless function // =()=>{} valor padrão
    function execute(callback=()=>{}){
        callback()
    }
    //valor padrão (){}
    execute(function(){
        console.log("executou")
    })

    
