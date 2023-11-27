import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class LanceServices {
    constructor(){}

    async ListarLances(id?: string){
        try{
            if(id){
                const lance = prisma.lance.findUnique({
                    where: {
                        id
                    }
                });
                return lance;
            }else{
                const lances = prisma.lance.findMany();
                return lances;
            }
        }catch(error){
        console.log(error);
        return null;
        }
    }

    async CriarLance(lance: Prisma.LanceCreateInput){

        try{
            const novoLance = await prisma.lance.create({
                data: lance
            });
            console.log(novoLance);
            return novoLance;
        }catch(error){
            console.log(error);
            return null;
        }
    }


}

export default new LanceServices();