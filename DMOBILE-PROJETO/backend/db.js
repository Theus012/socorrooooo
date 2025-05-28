const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'matheus2025', // coloque a sua senha aqui, se tiver
  database: 'cadastro_usuarios'
});

db.connect((err) => {
  if (err) {
    console.error('Erro na conexão com o MySQL:', err);
  } else {
    console.log('Conectado ao banco de dados MySQL!');
  }
});

module.exports = db;
