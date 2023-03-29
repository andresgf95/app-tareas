import sqlite3 from "sqlite3";

const DataBase = new sqlite3.Database('../db/Database.sqlite', 
(error) => {
    if (error) console.error(error)
    else console.log('¡Running Database! 🕹️');
});

DataBase.run(`
    CREATE TABLE
        IF NOT EXISTS
        tasks(
            id INTEGER PRIMARY KEY,
            descripcion TEXT NOT NULL,
            rematada BOOLEAN NOT NULL
        )
`);

export default DataBase