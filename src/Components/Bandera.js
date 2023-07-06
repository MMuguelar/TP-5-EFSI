
import React, { useState } from "react";
import Formulario from "./Formulario";


function Bandera({pais, bandera}) {

    console.log("pais", pais);
  return (
   <>
    <img  src ={bandera} class="tamañoBandera" />
    
    
    
   </>
  )
}

export default Bandera;