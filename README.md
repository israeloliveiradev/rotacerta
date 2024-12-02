# Rota Certa 🚚

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)  ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)  ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)  

**Rota Certa** é um sistema de gerenciamento de entregas eficiente e fácil de usar, desenvolvido com tecnologias modernas para otimizar o processo de cadastro e acompanhamento de entregas.

---

## 📋 Índice

- [Funcionalidades](#-funcionalidades)  
- [Tecnologias](#-tecnologias)  
- [Instalação](#-instalação)  
- [Configuração](#-configuração)  
- [Uso](#-uso)  

---

## ✨ Funcionalidades

- 📝 Cadastro de entregas com nome do cliente, CEP e número.  
- 📊 Listagem de todas as entregas cadastradas.  
- 🔍 Visualização detalhada de uma entrega específica.  
- 🗑️ Exclusão de entregas.  
- 🔢 Geração automática de IDs sequenciais para as entregas.  
- 🏙️ Integração com a **API ViaCEP** para obtenção de dados de endereço.  

---

## 🛠 Tecnologias

- [Node.js](https://nodejs.org/)  
- [Express.js](https://expressjs.com/)  
- [Firebase Realtime Database](https://firebase.google.com/products/realtime-database)  
- [Handlebars](https://handlebarsjs.com/)  
- [Axios](https://axios-http.com/)  
- [API ViaCEP](https://viacep.com.br/)  

---

## 📦 Instalação

1. Clone o repositório:  
   ```bash
   git clone https://github.com/seu-usuario/rota-certa.git
   cd rota-certa
2. Instale as dependências:
   ```bash
    npm install
---
## ⚙ Configuração

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/).  
2. Obtenha as credenciais do seu projeto Firebase.  
3. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:  

   ```env
   
   FIREBASE_DATABASE_URL=sua_database_url

## 🚀 Uso

1. Inicie o servidor:  
   ```bash
   npm start
Acesse a aplicação em seu navegador:
http://localhost:3000

- Funcionalidades disponíveis:
- Cadastrar novas entregas.
- Visualizar a lista de entregas.
- Ver detalhes de uma entrega específica.
- Excluir entregas.
---
