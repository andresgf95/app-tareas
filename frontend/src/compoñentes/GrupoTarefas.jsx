function GrupoTarefas({tarefas}) {
    return (
        <ul>
        {
            tarefas.map(
            tarefa=><li type='square' key={tarefa.id}>{tarefa.descripcion} <input type="checkbox" checked={tarefa.rematada}/></li>
            )
        }
        </ul>
    );
}

export default GrupoTarefas