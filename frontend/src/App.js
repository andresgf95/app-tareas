import { useState } from 'react';
import './App.css';
import MensaxeAlert from './compoñentes/Alert';
import EngadirTarefa from './compoñentes/EngadirTarefas';



function App() {

  const [alert, setAlert] = useState("")



  return (
    <>
      <EngadirTarefa estableceAlerta={setAlert}/>

      { alert != "" && <MensaxeAlert message={alert}/> }

    </>
  );
}

export default App;