import TodoModel from "../models/todo.model";
import { Express, Request, Response } from "express";

export default class TodoController {
  constructor(app: Express) {
    app.get("/todos", this.getTodos);
  }
  getTodos = (request: Request, response: Response) => {
    const todoModel = new TodoModel();
    const todos = todoModel.getTodos();
    console.log(todos);
    response.json(todos);
  };
}
