const pessoaUm = "Tinao";
const pessoaDois = "Douglas";

const executarTarefasCasas = () => {
  let countTarefas = 0;
  for (let i = 0; i < 1000; i++) {
    console.log("Executando a tarefa", i);
    if(i==2){
        setTimeout(()=>{
            console.log(pessoaDois, " Comprei pão")
        }, 3000
    )
    }
  }
};

executarTarefasCasas()