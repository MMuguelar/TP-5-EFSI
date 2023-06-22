
import React, { useState } from "react";


function Bandera({pais, bandera}) {

    const comprobarRespuesta = (e)=>{
        console.log(e);
        document.querySelector('#modificar').value="skafdbhjfbdjfwe"
      }
  return (
   <>
    <img src ={bandera} />
    <form onSubmit={comprobarRespuesta}>
    <label> Nombre Mascota</label> 
    <input type="text"  name="name" className="u-full-width" placeholder="Nombre Bandera"  ></input>
    <button type="submit" className="u-full-width button-primary" >Agregar Cita</button>
    </form>
    <br></br>
    <div id="modificar"></div>
   </>
  )
}

export default Bandera;