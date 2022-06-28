const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'sql529.main-hosting.eu', // O host do banco. Ex: localhost
    user: 'u647571890_TaskList', // Um usuário do banco. Ex: user 
    password: 'Ceqku1-behxob-jiwxip', // A senha do usuário. Ex: user123
    database: 'u647571890_TaskList' // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
});

con.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
})

con.end((err) => {
    if(err) {
        console.log('Erro to finish connection...', err)
        return 
    }
    console.log('The connection was finish...')
})