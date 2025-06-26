//só nao deu erro com a letra minuscula no import
import express from "express";
import TobeController from "../src/controllers/tobe.controller"
const app = express()
const port = 3000

app.get("/", (request: any, response: any)=>{
    response.send("Hermanoteu")
})

new TobeController(app)

app.listen(port,()=>{
    console.log("Corre Negada")
})