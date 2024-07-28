import pg from 'pg';

export const pool = new pg.Pool({
    user: "migul",
    host: "localhost",
    password: "Robins26",
    database: "postgres",
    port: "5432"
});

// pool.query('SELECT NOW()').then(result => {
//     console.log(result);
// });

