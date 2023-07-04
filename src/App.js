import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect , getRandomInt} from "react";
import Bandera from './Components/Bandera.js';
import Formulario from './Components/Formulario.js';
import axios from 'axios';

function App() {
  
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
    <>    
    <h1>Adivina la bandera</h1>    


    {paises.length>0 ? (
      <Bandera pais={paises[numram].name} bandera={paises[numram].flag}/>    
    ) : <div>Loading</div>}
    
    <Formulario sacarDatos = {comprobarRespuesta}/>
    <p>Sus puntos son: {puntos}</p>
    
    <h3> {resultado}</h3>

    <button onClick={cambiarDeBandera}>Siguiente pregunta</button>
    </>
    
  );
}
//

export default App;
