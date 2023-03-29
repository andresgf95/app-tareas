import { useState } from "react";

function GrupoTarefas({tarefas, actualizaCheck}) {

    const [InputCheck, setInputCheck] = useState(false)

    function CallbackCheck() {
        fetch("http://localhost:8000/tarefa/",
          {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
              {
                rematada: InputCheck,
              }
            ),
          }
        )
          .then(Ok)
          .catch(NonVai)
      }

    function Ok(resposta) {
        if (resposta.funciona) {
            setInputCheck(true)
            actualizaCheck()
        } else {
            alert("💩")
      }
    }

    function NonVai(notfound) {
        notfound.alert("ATENCIÓN: EL GOBIERNO HA CAIDO. Todas las telecomunicación han sido restringidas a nivel estatal para proteger y salvaguardar la seguridad ciudadana. SE IMPONE UN TOQUE DE QUEDA A PARTIR DE LAS 21:00 Zona horaria de Madrid GMT+1")
    }

    function HandlerCheck(event) {
        setInputCheck(event.target.value)
    }

    return (
    <div>
        <ul>
        {tarefas.map(task=>
            <li key={task.id}>{task.descripcion}
            <input type="checkbox" value={InputCheck} onClick={HandlerCheck} onChange={CallbackCheck}/>
            </li>
            )
        }
        </ul>
    </div>
    );
}

export default GrupoTarefas