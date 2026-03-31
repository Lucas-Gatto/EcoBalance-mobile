const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  //Se não tiver token
  if (!authHeader) {
    return res.status(401).json({ message: "Token não fornecido" });
  }

  //Pega o token (remove "Bearer ")
  const token = authHeader.split(" ")[1];

  try {
    //Verifica o token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //Salva dados do usuário
    req.user = decoded;

    next(); //Continua pra rota

  } catch (error) {
    return res.status(401).json({ message: "Token inválido" });
  }
};

module.exports = authMiddleware;