import TodoController from "./controllers/todo.controller";
import PokemonController from "./controllers/pokemon.controller";
import express from "express";
import { Request, Response } from "express";

const app = express();
const port = 3000;
app.use(express.json()); // request vem em formato "json"
app.use(express.urlencoded({ extended: true })); // codifica a url (entende sinais de pontuação e converte pra "sem sinais")
//abordagem de função
app.get("/", (request: Request, response: Response) => {
  response.send("Lindo Chrisin");
});

//abordagem de classes
new TodoController(app);
new PokemonController(app);

app.listen(port, () => {
  console.log("Server Runing");
});
