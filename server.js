//env variables
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const pg = require('pg');
// const superagent = ('superagent');


//API Dependencies 


const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);
client.connect();

//setup
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(morgan());
app.use(express.static('public'));


app.get('/api/turtles', (req, res) => {
    client.query(`
    SELECT
        id,
        name,
        animaltype,
        url,
        weapon,
        hero
    FROM tmnt;

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
//pull da lever
app.listen(PORT, () => {
    console.log('Turtle Power active on PORT', PORT);
});
