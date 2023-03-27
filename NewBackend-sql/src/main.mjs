import express from "express"
import cors from "cors"
import sqlite3 from "sqlite3"
import { GetTask } from "./get.mjs"

const app = express()
app.use(cors())
app.use(express.json())

const DataBase = new sqlite3.Database('./Database.db', 
(error) => {
    if (error) console.error(error)
    else console.log('¡Running Database!');
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

app.get("/tarefa/", GetTask)

