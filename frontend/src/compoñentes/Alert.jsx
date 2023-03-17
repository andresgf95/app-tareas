

function MensaxeAlert({message}) {

    return (
        <div className="alert alert-danger" role="alert">
            <h1 className="alert-heading">ATENCIÓN: EL GOBIERNO HA CAIDO</h1>
            <p>Todas las telecomunicación han sido restringidas a nivel estatal para proteger y salvaguardar la seguridad ciudadana. SE IMPONE UN TOQUE DE QUEDA A PARTIR DE LAS 21:00 Zona horaria de Madrid GMT+1</p>
            <hr></hr>
            <p className="mb-0">Manténgase a la espera de un nuevo comunicado.</p>
            <p>{message}</p>
        </div>
    );
}

export default MensaxeAlert;