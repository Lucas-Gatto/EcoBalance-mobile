const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Endpoints de Autenticação e Usuários
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Cadastra um novo usuário
 *     description: Rota para criar uma nova conta de usuário (Ainda não implementado).
 *     tags: [Auth]
 *     responses:
 *       501:
 *         description: Cadastro ainda não implementado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Cadastro ainda não implementado.
 */
router.post('/register', authController.registerUser);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Realiza o login do usuário
 *     description: Rota para autenticação e geração de token (Ainda não implementado).
 *     tags: [Auth]
 *     responses:
 *       501:
 *         description: Login ainda não implementado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Login ainda não implementado.
 */
router.post('/login', authController.loginUser);

module.exports = router;
