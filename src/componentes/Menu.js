import React from 'react'
import data from '../data/menu.json'
import '../css/Menu.css'
import Name from '../componentes/Name';
import Mesas from './Mesas';




const Menu = () => {
  return (
    <section>
      <div className='container'>
        <div className='col-6 d-flex justify-content-around p-3 fw-bold'>
          <button className="btn btn-primary btn-menu">Desayuno</button>
          <button className="btn btn-primary btn-menu">Almuerzo</button>
        </div>

        <div className='row'>
          <div className='col-6'>

            <ul className="list-group d-flex">
              {data.desayunos.map(element => {
                return (
                  <li className='list-group-item menu mt-3'>{element.name}   {element.price} </li>)
              })}
            </ul>


          </div>
          <div className='col-6'>
            <section>
            <Name/>
            <Mesas/>
            </section>





          </div>

        </div>

      </div>
    </section>
  )
}

export default Menu