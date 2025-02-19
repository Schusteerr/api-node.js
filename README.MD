# 📹 Video API

API para gerenciar vídeos usando **Node.js**, **Fastify**, **PostgreSQL** e **Docker**.

## 🚀 Tecnologias Usadas
- Node.js
- Fastify
- PostgreSQL
- Docker

## 🔧 Como Rodar o Projeto

### 1️⃣ Clone o Repositório
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2️⃣ Configure o Ambiente  
Crie um arquivo `.env` e defina as credenciais de acordo com seu PostgreSQL:

```env
POSTGRES_USER=user
POSTGRES_PASSWORD=pass
POSTGRES_DB=mydatabase
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
```

### 3️⃣ Suba o Banco de Dados com Docker  
```bash
docker-compose up --build -d
```

### 4️⃣ Instale as Dependências
```bash
npm install
```

### 5️⃣ Inicie o Servidor
```bash
node server.js
```

### 6️⃣ Teste as Rotas  
  * Use o arquivo routes.http para testar as rotas rapidamente.
* Certifique-se de que o banco de dados esteja rodando corretamente via Docker.

## 📌 Rotas Disponíveis
- `POST /videos` → Criar um vídeo  
- `GET /videos` → Listar todos os vídeos  
- `PUT /videos/:id` → Atualizar um vídeo  
- `DELETE /videos/:id` → Deletar um vídeo  

