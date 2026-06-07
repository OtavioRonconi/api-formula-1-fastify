# 🏎️ Formula 1 API - Fastify

Uma API RESTful leve e de alta performance desenvolvida com Node.js e Fastify, criada para gerenciar dados de pilotos da Fórmula 1. Este projeto faz parte de um desafio prático da plataforma DIO (Digital Innovation One).

## 🚀 Tecnologias Utilizadas

* **Node.js**: Ambiente de execução JavaScript.
* **Fastify**: Framework web focado em máxima performance e baixo overhead.

## ⚙️ Como Executar o Projeto

```bash
**1. Clone este repositório:**

git clone https://github.com/OtavioRonconi/api-formula-1-fastify.git

2. Acesse a pasta do projeto:

cd api-formula-1-fastify

3. Instale as dependências:

npm install

4. Inicie o servidor:

npm start

O servidor estará rodando em http://localhost:3333.

📌 Endpoints da API

GET /drivers - Retorna a lista de todos os pilotos.

GET /drivers/:id - Retorna os detalhes de um piloto específico.

POST /drivers - Adiciona um novo piloto (Requer JSON com name e team).

PUT /drivers/:id - Atualiza os dados de um piloto existente.

DELETE /drivers/:id - Remove um piloto do sistema.

👨‍💻 Autor
Desenvolvido por Otávio Ronconi
