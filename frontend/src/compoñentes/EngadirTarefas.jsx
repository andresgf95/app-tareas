import { useState } from "react";

function EngadirTarefa({ ActualizarTarefas }) {

  const [InputTarefa, setInputTarefa] = useState("")

  function ManexadorBoton() {
    fetch("http://localhost:8000/tarefa/",
      {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          {
            id: Date.now(),
            descripcion: InputTarefa,
            rematada: (!false),
          }
        ),
      }
    )
      .then(Funciona)
      .catch(Erro)
  }

  function Funciona(resposta) {
    if (resposta.ok) {
      setInputTarefa("")
      ActualizarTarefas()
    }
    else
    alert("Pechamos 5 minutos para ir ao baño, desculpen as molestias.")
  }

  function Erro(error) {
      error.alert("ATENCIÓN: EL GOBIERNO HA CAIDO. Todas las telecomunicación han sido restringidas a nivel estatal para proteger y salvaguardar la seguridad ciudadana. SE IMPONE UN TOQUE DE QUEDA A PARTIR DE LAS 21:00 Zona horaria de Madrid GMT+1")
  }

  function ManexadorInput(evento) {
    setInputTarefa(evento.target.value)
  }

  return (
    <>
      <div className="input-group">
        <button className="btn btn-outline-success" type="button" onClick={ManexadorBoton} id="button-addon1">📝</button>
        <input type="text" value={InputTarefa} onInput={ManexadorInput} className="form-control" placeholder="Engade Unha nova Tarefa" aria-label="Example text with button addon" aria-describedby="button-addon1" />
      </div>
    </>
  );
}

export default EngadirTarefa;