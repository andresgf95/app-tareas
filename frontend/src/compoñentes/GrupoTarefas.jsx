import EngadirTarefa from './EngadirTarefas';
import styles from './GrupoTarefas.module.css'

function GrupoTarefas({tarefas, Callbacktarefas}) {


    return (
        <>
        <EngadirTarefa ActualizarTarefas={Callbacktarefas}/>
        <ul>
        {
            tarefas.map(
            tarefa=>
            <li className={styles.li} type='square' key={tarefa.id}>{tarefa.descripcion} 
            <input className={styles.input} type="checkbox" checked={tarefa.rematada}/></li>
            )
        }
        </ul>
        </>
    );
}

export default GrupoTarefas