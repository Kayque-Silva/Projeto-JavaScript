const { Pool } = require('pg');


const connectionString = 'postgresql://desenvolvedor:dev123@localhost:5432/postgres';


const pool = new Pool({
  connectionString: connectionString,
});


pool.connect()
  .then(() => {
    console.log('Conexão bem-sucedida ao banco de dados!');
    
    
    
    
    pool.end();
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });
