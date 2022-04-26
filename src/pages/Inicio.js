import React from 'react';
import { Link } from "react-router-dom"
import '../css/Inicio.css';


function Inicio() {
  return (
    <section className='container d-flex flex-column justify-content-center'  >
      <img 
        className='imagen-logo'
        src={require('../imagenes/logo.png')}
        alt='Imagen de logo'/>

        <div className= 'd-flex justify-content-center' > 
        <Link className="button-cocinero d-flex justify-content-center" to="/Mesero">
          <img className='img-inicio' src={require('../imagenes/mesero.png')} 
          alt='Imagen de mesero'/>
        </Link> 
      

        <Link className="button-cocinero d-flex justify-content-center" to="/Cocina">
           <img className='img-inicio' src={require('../imagenes/cocinero.png')} 
          alt='Imagen de cocinero'/> 
        </Link> 
        </div>

        

    </section> 

  );
}



export default Inicio;