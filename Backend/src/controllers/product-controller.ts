import type { Request, Response } from "express";
import { prisma } from "../db.js";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const Products = await prisma.product.findMany();

    if (Products.length === 0) {
      res.status(404).json({ message: "Não foram encontrados produtos" });
      return;
    }

    res.json(Products);
  } catch (error) {
    res.status(500).json({ message: "Erro no servidor" });
    return;
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { user } = req;
    const { id } = req.params;

    if (!user?.admin) {
      res.status(400).json({ message: "Usuário não autorizado" });
      return;
    }

    if (!id) {
      res.status(400).json({ message: "ID não encontrado" });
      return;
    }

    const deletedProduct = await prisma.product.delete({
      where: { id: id },
    });

    if (!deleteProduct) {
      res.status(404).json({ message: "Erro ao deletar o produto" });
      return;
    }

    console.log(deletedProduct);

    res.json(id);
  } catch (error: any) {
    if (error.code === "P2025") {
      res.json({ message: "Produto não encontrado" });
    }
    res.status(500).json({ message: "Erro no servidor" });
    return;
  }
};
