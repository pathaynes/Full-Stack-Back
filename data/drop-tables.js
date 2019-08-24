require('dotenv').config();

const pg = require('pg');

const Client = pg.Client;

const client = new Client(process.env.DATABASE_URL);

client.connect()
    .then(() => {
        return client.query(`
            DROP TABLE IF EXISTS tmnt;
            DROP TABLE IF EXISTS animaltypes;
    `);
    })
    .then(
        () => console.log('Turtles have gone to get pizza'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });