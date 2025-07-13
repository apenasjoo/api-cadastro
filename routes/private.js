import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router("");
const prisma = new PrismaClient();

router.get("/listas-usuarios", async (req, res) => {
  try {
    const users = await prisma.user.findMany({ omit: { password: true } });

    res.status(200).json({ message: "Usuario listado com sucesso", users });
  } catch (err) {
    res.status(500).json({ message: " Erro no serve, na lista de usuario" });
  }
});

export default router;
