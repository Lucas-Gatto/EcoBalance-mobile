const dns = require('node:dns');
dns.setServers(['8.8.8.8', '8.8.4.4']); // Google Public DNS

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB } = require('./database/connection');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.json({ message: 'Backend do EcoBalance está rodando!' });
});

// Importar rotas aqui (exemplo)
// const userRoutes = require('./routes/userRoutes');
// app.use('/api/users', userRoutes);

async function startServer() {
  await connectDB();
  app.listen(port, () => {
    console.log(`🚀 Servidor rodando na porta ${port}`);
  });
}

startServer();
