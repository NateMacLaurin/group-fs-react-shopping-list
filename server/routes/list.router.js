const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

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