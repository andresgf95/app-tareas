import { useEffect, useState } from "react";

function MensaxeAlert({Erro}) {

    const [Mensaxe, setMensaxe] = useState(false)

    function PushAlert() {
        setMensaxe(true)
    }

    useEffect(
        ()=>{
            PushAlert && Erro
        },
        []
    )

    return (
        <div class="alert alert-danger" role="alert">
            <h1 class="alert-heading">ATENCIÓN: EL GOBIERNO HA CAIDO</h1>
            <p>Todas las telecomunicación han sido restringidas a nivel estatal para proteger y salvaguardar la seguridad ciudadana. SE IMPONE UN TOQUE DE QUEDA A PARTIR DE LAS 21:00 Zona horaria de Madrid GMT+1</p>
            <hr></hr>
            <p class="mb-0">Manténgase a la espera de un nuevo comunicado.</p>
        </div>
    );
}

export default MensaxeAlert;