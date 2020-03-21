import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Frase from './Components/Frase'

function App() {

const [frase, guardarFrase] = useState({})


// Hacer consulta a API con axios
const consultarApi = async () => {
  const resultadoConsulta = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
  const frase = resultadoConsulta.data[0]
  guardarFrase(frase)
  console.log(frase);
}

//Hacer consulta al cargar la pagina
useEffect(() => {
  consultarApi()
}, [])


  return (
    <div className="contenedor">
      <Frase 
        frase = {frase}
      />
      <button
        onClick = {consultarApi}        
      >New Phrase</button>
    </div>
  );
}

export default App;
