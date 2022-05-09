import React, {useContext} from 'react';
import data from '../data/menu.json'
import {UserContent} from '../UseContext/UserContent'
import '../css/Menu.css'

function Desayunos() {
  
  const { cart, setCart } = useContext(UserContent);

  //función para agregar elementos 
  const addToCart = (item) => {

    if (cart.some(itemActual => itemActual.id === item.id)) {
      const arrCart = cart.map((itemActual) => itemActual.id === item.id ? { ...itemActual, cant: itemActual.cant + 1 } : itemActual)
      setCart(arrCart);
    }
    else {
      setCart([...cart, { id: item.id, name: item.name, price: item.price, cant: 1 }]);
    }
  }

  return (
    <>
      {data.desayunos.map((item) => {
        return (
          <>
            <div key={item.id} onClick={() => addToCart(item)} >
              <p className="producto text-black"> {item.name} {item.price}  </p>

            </div>
          </>
        )
      })}
    </>
  );
}
export default Desayunos;