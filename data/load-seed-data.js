require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
const tmnt = require('./tmnt');
const animaltypes = require('./animaltypes');

// note: you will need to create a database
const client = new Client(process.env.DATABASE_URL);

client.connect()
    .then(() => {
        return Promise.all(
            animaltypes.map(animaltype => {
                return client.query(`
                   INSERT INTO animaltypes (name)
                   VALUES ($1)
                   RETURNING *;
                `,
                [animaltype])
                    .then(result => result.rows[0]);
            })
        );
    })
    .then(() => {
       //"promise all" does a parallel execution of async tasks
        return Promise.all(
            tmnt.map(tmnt => {
                const animaltype = animaltypes.find(animaltype => {
                    return animaltype.name === tmnt.animaltype;
                });
                const typeId = animaltype.id;

                return client.query(`
                   INSERT INTO tmnt (id, name, hero, animaltype, weapon, url)
                   VALUES ($1, $2, $3, $4, $5, $6);
                `,
                [tmnt.id, tmnt.name, tmnt.hero, typeId, tmnt.weapon, tmnt.url]);
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
