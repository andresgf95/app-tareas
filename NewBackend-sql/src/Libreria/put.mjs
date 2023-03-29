import DataBase from "./sqlite.mjs"

function PutTask(peticion, respuesta) {
    DataBase.run(
        'UPDATE tasks SET descripcion = ?, rematada = ? WHERE id = ?',
        [peticion.body.descripcion, peticion.body.rematada, peticion.body.id],
        (error)=>{
            if (error) {
                console.error(error)
                respuesta.status(500)
                respuesta.send("💩, consulta a consola")
            } else {
                respuesta.status(200)
                respuesta.send("👌")
            }
        }
    )
}
export { PutTask }