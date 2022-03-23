const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'School_App2',
    password: 'dewakematian',
    port: 5432
})

// pool.query('SELECT NOW()', (err, res) => {
//     console.log(err, res);
//     console.log(`BERHASIL CONNECT`);
//     pool.end()
// })

module.exports = pool

