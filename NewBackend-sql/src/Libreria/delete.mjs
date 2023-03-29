import DataBase from "./sqlite.mjs"

function DeleteTask(peticion,respuesta) {
    DataBase.run(
        'DELETE FROM tasks WHERE id = ?',
        [peticion.body.id],
        (error) => {
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

export { DeleteTask }