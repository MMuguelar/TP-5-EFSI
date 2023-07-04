import React, { useState } from "react";


function Formulario({sacarDatos}) {
  
  const [bandera, setBandera]=useState('')
 
  const onChangeHandle = (e)=>{
    setBandera(e.target.value);

  }

  const agregarDatos = (e)=>{
    e.preventDefault();
    console.log(bandera);
    sacarDatos(bandera);
    

  }

  //const {mascota,propietario} = datos;
  
  return (
    <>
    <form onSubmit={agregarDatos}>
    <label> Nombre bandera</label> 
    <input type="text"  name="bandera" className="u-full-width" placeholder="Nombre bandera"  onChange={onChangeHandle}></input>
    
    
    <button type="submit" className="u-full-width button-primary" >Envíar respuesta</button>
    </form>
  </>
  )
}

export default Formulario;





