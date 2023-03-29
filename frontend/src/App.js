import { useEffect, useState } from 'react';
import EngadirTarefa from './compoñentes/EngadirTarefas';
import GrupoTarefas from './compoñentes/GrupoTarefas';


function App() {

  const [tarefas, setTarefas] = useState([])

  useEffect(
    Callbacktarefas,
    []
  )

  function Callbacktarefas() {
    fetch("http://localhost:8000/tarefa/").then(
      resposta=>{resposta.json().then(
        (DatosActualizados)=>{setTarefas(DatosActualizados)}
      )
      }
    ).catch()
  }



  return (
    <main className='corpo'>
      <div className="Engadir">
        <EngadirTarefa ActualizarTarefas={Callbacktarefas} />
      </div>
      <div>
        <GrupoTarefas tarefas={tarefas} actualizaCheck={Callbacktarefas}/>
      </div>
      <div>
        <button onClick={Callbacktarefas}>Actualiza</button>
      </div>
    </main>
  );
}

export default App;