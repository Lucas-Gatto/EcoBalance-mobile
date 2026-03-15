const { MongoClient } = require('mongodb');

let dbInstance = null;

async function connectDB() {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.error('❌ MONGO_URI não está definida nas variáveis de ambiente');
    process.exit(1);
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('✅ Conectado com sucesso ao MongoDB Atlas');
    dbInstance = client.db();
    return dbInstance;
  } catch (error) {
    console.error('❌ Erro na conexão com o MongoDB:', error);
    process.exit(1);
  }
}

function getDB() {
  if (!dbInstance) {
    throw new Error('Database not initialized. Call connectDB first.');
  }
  return dbInstance;
}

module.exports = { connectDB, getDB };
