import React, { useState } from "react";


function Formulario({sacarDatos}) {
  
  const [datos, setDatos]=useState({
    mascota:'',
    propietario:'',
    fecha:2023/6/8,
    hora:"--:--",
    sintomas:''
  })
  /*
  if(datos.mascota==''||datos.propietario=='')
  {
    console.log("Error!!!!");
    
  }
  */
  const onChangeHandle = (e)=>{
    setDatos({
      ...datos, // los 3 puntos son para hacer una copia y no cambiar el resto del objeto
      [e.target.name]:e.target.value} //al hacer target name, estas poniendo que alla vaya lo que hayas puesto de name en el input.
    )

  }

  const agregarDatos = (e)=>{
    e.preventDefault();
    console.log(datos);
    sacarDatos(datos);
    

  }

  //const {mascota,propietario} = datos;
  
  return (
    <>
    <form onSubmit={agregarDatos}>
    <label> Nombre Mascota</label> 
    <input type="text"  name="mascota" className="u-full-width" placeholder="Nombre Mascota"  onChange={onChangeHandle}></input>
    
    
    <button type="submit" className="u-full-width button-primary" >Agregar Cita</button>
    </form>
  </>
  )
}

export default Formulario;





