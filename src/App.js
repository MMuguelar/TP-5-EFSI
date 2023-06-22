import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect , getRandomInt} from "react";
import Bandera from './Components/Bandera.js';
import axios from 'axios';

function App() {

  const [puntos, setPuntos] = useState(0)
  const [paises, setPaises] = useState([])
  const [numram,setNumram] = useState(0)
  useEffect(() => {
    axios
    .get("https://countriesnow.space/api/v0.1/countries/flag/images")
    .then((result) => {
      console.log(result.data.data);
      setPaises(result.data.data);
    });

   }, []); 

   useEffect(()=>{
    if(paises.length>0)
      setNumram(generarNumeroAleatorio())
   },[paises])

   const generarNumeroAleatorio = () => {
    const cantPaises = paises.length;
    let numRam = Math.floor(Math.random() * cantPaises);
    console.log(numRam);
    return numRam;
  };

  
  return (
    <>    
    <h1>Adivina la bandera</h1>    


    {paises.length>0 ? (
      <Bandera pais={paises[numram].name} bandera={paises[numram].flag}/>    
    ) : <div>Loading</div>}
    
    
    </>
  
  );
}
//

export default App;
