import "dotenv/config.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter }); // Forma nova de usar o PrismaClient

// Forma antiga de usar o PrismaClient
// const prisma = new PrismaClient()

export { prisma };

// export async function connection(){
//     await prisma.$connect()
//     console.log("Sucesso ao conectar-se ao Banco de Dados")
// }

export async function connection() {
  try {
    await prisma.$connect();
    console.log("Sucesso ao conectar-se ao Banco de Dados");
  } catch (error) {
    console.error("Erro ao conectar no banco na inicialização:", error);
  }
}

connection();