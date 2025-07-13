import express from "express";
import publicRoutes from "./routes/public.js";
import privateRoutes from "./routes/private.js";
import { PrismaClient } from "@prisma/client";
import auth from "./MiddLewares/auth.js";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.use("/", publicRoutes);
app.use("/", auth, privateRoutes);

// 3 rotas

// Cadastro, Login, Listar Usuario

app.listen(3000, () => console.log("Servidor rodando !"));

// IcZ3S3lGYnXQ0Sdc
//apenasjoo
//mongodb+srv://apenasjoo:IcZ3S3lGYnXQ0Sdc@cadastro.3ytuj7j.mongodb.net/?retryWrites=true&w=majority&appName=cadastro
