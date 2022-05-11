import React from 'react'
import '../css/Menu.css'
import Pedidos from './Pedidos'
import Desayunos from './Desayunos';
import Almuerzos from './Almuerzos';
import { useState } from 'react';




const Menu = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (

    <section>

      <div className='container'>

        <div className='row'>

          <div className='col-6 d-flex justify-content-around p-3 fw-bold m-5'>
            <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} >
              <button className="btn btn-primary btn-menu"
                onClick={() => toggleTab(1)} >Desayuno</button>
            </div>


            <div className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}>
              <button className="btn btn-primary btn-menu"
                onClick={() => toggleTab(2)} >Almuerzo</button>
            </div>
          </div>

          <div className='row'>
            <div className='col-6 d-flex justify-content-center p-5 mt-3'>

              <div className='content-tabs'>

                <div className={toggleState === 1 ? "active-content" : "content"}>

                  <Desayunos />
                </div>

                <div className={toggleState === 2 ? "active-content" : "content"}>
                  <Almuerzos />
                </div>

              </div>
              </div>


              <div className='col-6 pedidos d-flex justify-content-center p-5 mt-3'>
                <section>
                  {/* <div>
                    <Name />
                  </div>
                  <div> <Mesas /></div> */}
                  <div>  <Pedidos /></div>


                  {/* <div>
                    <Send />
                  </div> */}

                </section>
              </div>

            </div>

          </div>
        </div>

    </section>

  )
}

export default Menu