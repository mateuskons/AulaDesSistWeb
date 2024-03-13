import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(){
    const result = await prisma.modules.create({
        data: {
            name: "Módulo React",
            description: "Módulo 1",
        }
    
    })
console.log(result)
}

main()