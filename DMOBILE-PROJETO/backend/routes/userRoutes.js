const express = require('express');
const router = express.Router();
const db = require('../db');

// Rota de cadastro de usuário
router.post('/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ message: 'Campos obrigatórios não preenchidos' });
  }

  const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
  db.query(sql, [nome, email, senha], (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar:', err);
      return res.status(500).json({ message: 'Erro ao cadastrar usuário' });
    }

    res.status(201).json({ message: 'Usuário cadastrado com sucesso', id: result.insertId });
  });
});

module.exports = router;
