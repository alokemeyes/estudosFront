import express from "express";
/*type Instrumentos = Array<{
    name: string;
    line: number;
    color: string;
}>*/

let instrumentos = (request,response) => [
    {name:"violao", line: 6, color: "vermelho"},
    {name:"cavaco", line: 4, color: "marrom"},
    {name:"viola", line: 12, color: "amarelo"},
    {name:"contra baixo", line: 4, color: "preto"}
]

getinstrumentos = (request,response) => {
    const instrumentosModel = new instrumentosModel();
    const instru = instrumentosModel.getinstrumentos();
    console.log(instru);
    response.json(instru);
}

const app = express();
app.getinstrumentos(request,response);