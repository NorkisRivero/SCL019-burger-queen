import React, { useContext } from 'react';
import data from '../data/menu.json'
import '../css/Menu.css'
import { UserContent } from '../UseContext/UserContent'

function Almuerzos() {

  const { cart, setCart } = useContext(UserContent);

  //función para agregar elementos 
  function addToCart(item) {
    setCart([...cart, { ...item }]);
    console.log("estamos dando click a los elementos");
  }




  return (
    <div  >

      {/* <ul className="list-group d-flex">
              {data.almuerzos.map(element => {
                return (
                  <li className='list-group-item menu mt-3'>{element.name}       {element.price} </li>)
              })}
            </ul> */}

      {/* {data.almuerzos.map(element => {
              return (
                <button className='menu'>{element.name} {element.price}</button>
              )
            } )} */}

      {data.almuerzos.map((item, index) => {
        return (
          <> 

          <div key={index} onClick={() => addToCart(item)} >
            <p className="nombre-producto"> {item.name}  </p>
            <p className="precio"> {item.price} </p>

            {/* <button onClick={() => addToCart(element.id, element.price, element.name)} className="btn btn-primary" type="button">{element.name} {element.price}</button> */}



          </div>
          </>
        )


      })}



    </div>


  );
}
export default Almuerzos;