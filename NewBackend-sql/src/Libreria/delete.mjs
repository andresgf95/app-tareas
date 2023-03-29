import DataBase from "./sqlite.mjs"

function DeleteTask(peticion,respuesta) {
    DataBase.run(
        'DELETE FROM tasks WHERE id = ?',
        [peticion.body.id],
        (error) => {
            if (error) {
                console.error(error)
                respuesta.status(500)
                respuesta.send("Algo falla, descubre máis na consola")
            } else {
                respuesta.status(200)
                respuesta.send("Todo ok")
            }
        }
    )
}
export { DeleteTask }