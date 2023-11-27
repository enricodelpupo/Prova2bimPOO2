import { Request, Response } from "express"
import UserServices from "../services/userservices"
import {Prisma} from "@prisma/client"

class UserController{
    constructor(){}

    async listUsers(req: Request, res: Response){
        try {
            const users = await UserServices.findUsers();

            return res.json(users);
        } catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    async createUser(req: Request, res: Response){
        try {
        const data: Prisma.UsuarioCreateInput = req.body;

        const newUser = await UserServices.createUser(data)

        return res.json(newUser);
    }   catch(error){
        console.log(error);
        return res.json(400);
    }   
    }

    async deleteUser(req: Request, res: Response){
        try {
            const userData: string = req.params.usuarioId;

            const user = await UserServices.deleteUser(userData);

            return res.json(user)
        }   catch(error){
            console.log(error);
            return null;
        }
    }

    async updateUser(req: Request, res: Response){
        try {
            const userId = req.params.usuarioId;
            const data: Prisma.UsuarioCreateInput = req.body;

            const user = await UserServices.updateUser(userId, data);

            return res.json(user);
        }   catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    
}

export default new UserController();