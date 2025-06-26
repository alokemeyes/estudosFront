import {Express, Request, Response} from "express"
import TobeModel from "../models/tobe.model"

export default class TobeController{
    constructor(app: Express){
        app.get("/tobes", this.getTobe)
    }

    getTobe = (request: Request,response: Response)=>{
        const tobeModel = new TobeModel()
        const tobes = tobeModel.getTobe()
        console.log(tobes)
        response.json(tobes)
    }
}