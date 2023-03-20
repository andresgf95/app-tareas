import { useEffect, useState } from 'react';
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
    <body className='corpo'>
      <GrupoTarefas tarefas={tarefas} Callbacktarefas={Callbacktarefas}/>
    </body>
  );
}

export default App;