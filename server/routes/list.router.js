const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
router.post('/', (req, res) => {
    console.log(`POST req.body: ${req.body}`);
    let queryText = `INSERT INTO "shoplist" ("name", "quantity" , "unit") VALUES ($1, $2, $3);`;
    pool.query(queryText, [req.body.name, req.body.quantity, req.body.unit])
    .then((result => {
        console.log(`POST SUCCESSFUL`);
        res.sendStatus(200);
    })).catch((err) => {
        console.log(`ERROR: ${err}`);
        res.sendStatus(500);
    });
});

router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM shoplist;`;
    pool.query(sqlText)
    .then((result) => {
        console.log('from db', result);
        res.send(result.rows);
    })
    .catch((error) => {
        console.log(`err with db query ${sqlText}`, error);
        res.sendStatus(500);
    })

})

module.exports = router;