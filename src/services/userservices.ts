import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

class UserService {
    constructor() { }

    async createUser(user: Prisma.UsuarioCreateInput) {
        try {
            const newuser = await prisma.usuario.create({
                data: user
            });
            return newuser;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async findUsers(usuarioId?: string): Promise<Prisma.UsuarioCreateInput[] | Prisma.UsuarioCreateInput | undefined | null> {
        try {
            if (usuarioId) {
                const user = await prisma.usuario.findUnique({
                    where: {
                        usuarioId
                    }
                })
                return user;
            }
            else {
                const users = await prisma.usuario.findMany();
                return users;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async updateUser(usuarioId: string, newData: Prisma.UsuarioUpdateInput){
        try{
            const userUpdated = await prisma.usuario.update({
                where : {
                    usuarioId
                },
                data: {
                    nome: newData.nome,
                    email: newData.email,
                    lances: newData.lances,
                    leiloes: newData.leiloes,
                }
            });
            return userUpdated;
        }   catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteUser(usuarioId: string){
        try{
            if(!usuarioId){
                return console.log("ID is not optional.");
            }
            await prisma.usuario.delete({where: {usuarioId}});
            return "ok";
        } catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new UserService();