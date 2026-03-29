/**
 * Controlador de Autenticação
 * Aqui ficarão as lógicas de login e cadastro.
 */

// Esqueleto da função de cadastro (vazia/apenas estrutura)
const registerUser = async (req, res) => {
  // @TODO: Implementar lógica de criação de usuário no banco de dados
  
  return res.status(501).json({
    message: "Cadastro ainda não implementado."
  });
};

// Esqueleto da função de login (vazia/apenas estrutura)
const loginUser = async (req, res) => {
  // @TODO: Implementar lógica de verificação de credenciais e geração de token
  
  return res.status(501).json({
    message: "Login ainda não implementado."
  });
};

module.exports = {
  registerUser,
  loginUser
};
