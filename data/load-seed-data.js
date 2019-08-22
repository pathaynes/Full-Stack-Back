require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
const tmnt = require('./tmnt');
// note: you will need to create a database
const client = new Client(process.env.DATABASE_URL);

client.connect()
    .then(() => {
       //"promise all" does a parallel execution of async tasks
        return Promise.all(
            tmnt.map(tmnt => {
                return client.query(`
                   INSERT INTO tmnt (id, name, hero, animaltype, weapon, url)
                   VALUES ($1, $2, $3, $4, $5, $6);
           `,
                [tmnt.id, tmnt.name, tmnt.hero, tmnt.animaltype, tmnt.weapon, tmnt.url]);
            })
        );
    })
    .then(
        () => console.log('The turtles are here!'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });
