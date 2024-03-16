const express = require("express");
const router = express.Router();
const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database(
  "./database/dua_main.sqlite",
  sqlite3.OPEN_READONLY
);

router.get("/", (req, res) => {
  db.all(`SELECT * FROM sub_category`, (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
});

module.exports = router;
