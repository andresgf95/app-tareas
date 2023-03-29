import DataBase from "./sqlite.mjs"

function PostTask(peticion, respuesta) {
    DataBase.run(
        'INSERT INTO tasks(id, descripcion, rematada) VALUES (?, ?, ?)',
        [peticion.body.id, peticion.body.descripcion, peticion.body.rematada],
        (error) => {
            if (error) {
                console.error(error)
                respuesta.status(500)
                respuesta.send('Nada meu, algo falla')
            } else {
                respuesta.status(200)
                respuesta.send("Todo ben")
            }
        }
    )
}
export { PostTask }