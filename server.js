//env variables
require('dotenv').config();

//API Dependencies 
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const pg = require('pg');

//Database Client
const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);
client.connect();

//setup
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(morgan());
app.use(express.static('Public'));


app.get('/api/turtles', (req, res) => {
    client.query(`
    SELECT
        t.id,
        t.name,
        a.animaltype,
        t.url,
        t.weapon,
        t.hero
    FROM tmnt t
    JOIN animaltypes a
    ON t.animaltype = a.id
    ORDER BY animaltype;
    ;

    `)
        .then(result => {
            res.json(result.rows);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});
app.get('/api/turtles/:id', (req, res) => {
    const id = req.URLSearchParams.id;
    
    client.query(`
        SELECT
                t.*
                a.name as animaltype
                FROM tmnt t
                JOIN animaltypes a
                ON t.animaltype = a.id
                WHERE t.id = $1
    `,
    [id]
    )
        .then(result => {
            const turtle = result.rows[0];
            if(!turtle) {
                res.status(404).json({
                    error: `Character id ${id} does not exist`
                });
            }
            else {
                res.json(result.rows[0]);
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});
app.get('/api/turtles', (req, res) => {
    const tmnt = req.body;
    client.query(`
        INSERT INTO tmnt (id, name, animaltype, url, weapon, hero)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
    `,
    [tmnt.name, tmnt.name, tmnt.animaltype, tmnt.url, tmnt.weapon, tmnt.hero]
    )
        .then(result => {
            res.json(result.rows[0]);
        })
        .catch(err =>{
            res.status(500).json({
                error: err.message || err
            });
        });
});
app.get('/api/types', (req, res) => {
    client.query(`
        SELECT
            id,
            name
        FROM animaltypes
        ORDER BY name;
    `)
        .then(result => {
            res.json(result.rows);
        })
        .catch(err =>{
            res.status(500).json({
                error: err.message || err
            });
        });
});





//pull da lever
app.listen(PORT, () => {
    console.log('Turtle Power active on PORT', PORT);
});
