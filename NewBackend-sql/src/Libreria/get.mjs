import DataBase from "./sqlite.mjs"

function GetTask(peticion, respuesta) {
    if (peticion.query.id) {
        DataBase.get(
            `SELECT id, descripcion, rematada FROM tasks WHERE id = ?`,
            [peticion.query.id],
            (error, task) => {
                if (error) {
                    console.error(error)
                    respuesta.status(200)
                    respuesta.send('💩, consulta a consola')
                } else {
                    if (task) {
                        respuesta.status(200)
                        respuesta.send(JSON.stringify(task))
                    } else {
                        respuesta.status(404)
                        respuesta.send(`☢️ ${peticion.query.id}`)
                    }
                }
            }
        )
    } else {
        DataBase.all(
            `SELECT id, descripcion, rematada FROM tasks`,
            (error, AllTasks) => {
                if (error) {
                    console.error(error)
                    respuesta.status(500)
                    respuesta.send('💩, consulta a consola')
                } else {
                    respuesta.status(200)
                    respuesta.send(JSON.stringify(AllTasks))
                }
            }
        )
    }
}
export { GetTask }