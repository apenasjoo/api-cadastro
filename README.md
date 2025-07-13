# 🛠️ API de Cadastro - Projeto de Estudo

Este repositório contém uma **API de cadastro de usuários** desenvolvida com o objetivo de **estudar e aplicar na prática tecnologias modernas do ecossistema Node.js**, como:

- **Node.js** & **Express** – Para criação do servidor e definição das rotas HTTP;
- **Prisma ORM** – Para modelagem e manipulação do banco de dados de forma eficiente;
- **JWT (JSON Web Token)** – Para autenticação e autorização de usuários via token;
- **bcrypt** – Para criptografia segura das senhas;
- **Thunder Client** – Para testar endpoints diretamente no VS Code.

---

## 📚 Objetivo do Projeto

Este projeto foi criado com fins **educacionais**, marcando meu primeiro contato prático com estas tecnologias. A ideia é compreender, na prática, como construir uma API RESTful com autenticação, segurança básica e persistência de dados utilizando ferramentas modernas do backend JavaScript.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express**
- **Prisma ORM**
- **SQLite** (ou outro banco de dados configurado no Prisma)
- **JWT (jsonwebtoken)**
- **bcrypt**
- **Thunder Client** (para testes de requisição)

---

## 🧪 Funcionalidades

- Cadastro de novos usuários com senha criptografada usando bcrypt
- Login com geração de token JWT
- Proteção de rotas com autenticação via token
- Estrutura pronta para testes com Thunder Client
- Organização modular para futura expansão (CRUD completo, middleware, etc.)

---

## 📝 Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone  https://github.com/apenasjoo/api-cadastro/



2. Instale as dependências:
   ```bash
   npm install


3. Configure o banco de dados com Prisma:
   ```bash
   npx prisma migrate dev


4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev





📌 Observações
Este projeto não está pronto para produção, servindo como base inicial de aprendizado.

A segurança, organização de código e tratamento de erros ainda podem ser otimizados com o tempo e prática.

Futuramente, pretendo adicionar validações com Zod, testes com Jest e criar um front-end que consuma essa API.




---

📧 Contato
Caso queira trocar ideias, contribuir ou acompanhar minha evolução na programação, conecte-se comigo no [Linkedin](https://www.linkedin.com/in/apenasjoo/)

