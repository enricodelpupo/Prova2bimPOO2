import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

class LeilaoService {
    constructor () {}

    async createLeilao(leilao: Prisma.LeilaoCreateInput) {
        try {
            const newleilao = await prisma.leilao.create({
                data: leilao
            });
            return newleilao;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async findLeiloes(leilaoId?: string) {
        try {
          if (leilaoId){
            const leilao = await prisma.leilao.findUnique({
              where: { leilaoId }
            });
            return leilao;
          } else {
            const leiloes = await prisma.leilao.findMany();
            return leiloes; 
          }
        } catch (error) {
          console.error(error);
          return undefined; 
        }
      }

    async updateLeilao(leilaoId: string, newData: Prisma.LeilaoCreateInput){
        try {
            const leilaoUpdated = await prisma.leilao.update({
                where: {
                    leilaoId
                },
                data: {
                    dataLimite: newData.dataLimite,
                    dono: newData.dono,
                    listaLances: newData.listaLances,
                    preco: newData.preco,
                    produto: newData.produto
                }
            });
            return leilaoUpdated;
        }catch(error){
            console.log(error);
            return null;
        }
    }
    async deleteLeilao(leilaoId: string){
    try {
        if(!leilaoId){
            return console.log("ID is not optional.");
        }
        await prisma.leilao.delete({where: {leilaoId}});
        return "ok";
    }   catch(error){
        console.log("error");
        return null;
    }
    }
}

export default new LeilaoService;