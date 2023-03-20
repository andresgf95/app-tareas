import { useEffect, useState } from 'react';
import './App.css';
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
    <>
      <EngadirTarefa ActualizarTarefas={Callbacktarefas}/>
      <GrupoTarefas tarefas={tarefas}/>
    </>
  );
}

export default App;