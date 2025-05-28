const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3000; // Porta do servidor Express

// Middleware
app.use(cors());
app.use(express.json());

// Conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  port: 3306, // Aqui está sua porta
  user: 'root', // Altere se necessário
  password: '', // Sua senha do MySQL
  database: 'meu_banco' // Nome do banco criado
});

// Testa a conexão
db.connect(err => {
  if (err) {
    console.error('Erro ao conectar no MySQL:', err);
    return;
  }
  console.log('Conexão bem-sucedida com o MySQL!');
});

// Rota para cadastro de usuários
app.post('/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;

  const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
  db.query(sql, [nome, email, senha], (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar usuário:', err);
      return res.status(500).json({ error: 'Erro ao cadastrar' });
    }

    res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
  });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
