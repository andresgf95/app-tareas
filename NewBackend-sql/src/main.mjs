import express from "express"
import cors from "cors"
import { GetTask } from "./Libreria/get.mjs"
import { PostTask } from "./Libreria/post.mjs"
import { PutTask } from "./Libreria/put.mjs"
import { DeleteTask } from "./Libreria/delete.mjs"

const app = express()
app.use(cors())
app.use(express.json())


app.get("/tarefa/", GetTask)
app.post("/tarefa/", PostTask)
app.put("/tarefa/", PutTask)
app.delete("/tarefa/", DeleteTask)

app.listen( 8000,()=>{
    console.log("Motores de Proa Listos!");
})