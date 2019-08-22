require ('dotenv').config();

const pg = require('pg');
const Client = pg.Client;

const client = new Client(process.env.DATABASE_URL);

client.connect()
    .then(() => {
        return client.query(`
            CREATE TABLE tmnt (
                id SERIAL PRIMARY KEY NOT NULL,
                name VARCHAR(256) NOT NULL,
                hero BOOLEAN NOT NULL,
                animaltype VARCHAR(256) NOT NULL,
                weapon VARCHAR(256) NOT NULL,
                url VARCHAR(256) NOT NULL
            );
        `);
    })
    .then(
        ()=> console.log('create tables complete'),
        err => console.log(err)
    )
    .then (() => {
        client.end();
    });