import styles from './GrupoTarefas.module.css'

function GrupoTarefas({tarefas}) {


    return (
    <div className={styles.peza}>
        <ul>
        {tarefas.map(tarefa=>
            <li className="form-check form-switch" type='none' key={tarefa.id}>{tarefa.descripcion}
            <input className="form-check-input" type="checkbox" checked={tarefa.rematada}/>
            </li>
            )
        }
        </ul>
    </div>
    );
}

export default GrupoTarefas