import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const router = express.Router();

const jwt_secret = process.env.jwt_secret;
// cadastro

router.post("/cadastro", async (req, res) => {
  try {
    const user = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user.password, salt);

    const userDB = await prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        password: hashPassword,
      },
    });

    res.status(201).json(userDB);
  } catch (err) {
    console.log(err);
    res.status(500).json({ Message: "Erro no servidor, tente Novamente" });
  }
});

// login

router.post("/login", async (req, res) => {
  try {
    const userInfo = req.body;

    // Buscar Usuario no banco
    const user = await prisma.user.findUnique({
      where: { email: userInfo.email },
    });
    // verificar se usuario se exite
    if (!user) {
      return res.status(404).json({ message: "usuario Não encontrado" });
    }
    // verifica se senha que o usuario usou bate com o banco

    const isMath = await bcrypt.compare(userInfo.password, user.password);
    if (!isMath) {
      return res.status(404).json({ message: "Senha invalida" });
    }

    // gerar token jwt

    const token = jwt.sign({ id: user.id }, jwt_secret, { expiresIn: "1d" });

    res.status(200).json(token);
  } catch (err) {
    console.log(err);
    res.status(500).json({ Message: "Erro no servidor, tente Novamente" });
  }
});

export default router;
