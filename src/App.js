import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect , getRandomInt} from "react";
import Bandera from './Components/Bandera.js';
import Formulario from './Components/Formulario.js';
import { useTimer } from 'react-timer-hook';

import axios from 'axios';

function App() {
  //http://localhost:3000/
  const [puntos, setPuntos] = useState(0);
  const [paises, setPaises] = useState([]);
  const [numram,setNumram] = useState(0);
  const [resultado, setResultado] = useState("");
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
    setNumram(numRam);
    console.log(numRam);
    return numRam;
  };

  const comprobarRespuesta = (respuesta)=>{
    console.log ("num ram", numram)
    if(respuesta == paises[numram].name){
      setPuntos(puntos +10)
      console.log("la respuesta fue correcta");
      setResultado("Su respuesta es CORRECTA");
    }else{
      setPuntos(puntos -1)
      console.log ("la respuesta estuvo mal");
      setResultado("Su respuesta es INCORRECTA");
    }

   
  }
  const cambiarDeBandera=()=>{
    generarNumeroAleatorio();
    setResultado("");
  }
  return (
    
    <div className='App ' >    
    <h1 >Adivina la bandera</h1>    


    {paises.length>0 ? (
      <Bandera  pais={paises[numram].name} bandera={paises[numram].flag}/>    
    ) : <div>Loading</div>}
    
    <Formulario sacarDatos = {comprobarRespuesta}/>
    <h3>Sus puntos son: {puntos}</h3>
    
    <h3> {resultado}</h3>
    <div className="buttons">
      <div className="container">
      <a onClick={cambiarDeBandera} className="btn effect01" target="_blank"><span>Next flag </span></a>
      </div>
    </div>
  </div>
    
  );
}
//

export default App;
