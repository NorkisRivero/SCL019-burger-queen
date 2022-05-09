import React, { useContext } from "react";
import { UserContent } from '../UseContext/UserContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



const Pedidos = () => {
  const { cart, setCart } = useContext(UserContent);
  const itemsPrice = cart.reduce((a, c) => a + c.cant * c.price, 0);



  const deleteProduct = (id) => {
    const existProducts = cart.find((item) => item.id === id);
    if (existProducts.cant === 1) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === id
          ? { ...existProducts, cant: existProducts.cant - 1 }
            : item
        )
      )
    }
  }


    
  return (
  
    <section>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Cantidad</th>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        {cart.map(item => {
          return (
            <tbody>
              <tr>
                <th scope="row">{item.cant}</th>
                <td> {item.name}</td>
                <td> {item.price}</td>
                <td> 
                <FontAwesomeIcon icon={faTrash}

                onClick={() => deleteProduct(item.id)}
                 />
                   </td>
              </tr>
            </tbody>
            
          )
          
        })}
        

      </table>

      <section className="tfoot">
            <p className="result"></p>
            <p colSpan="2"> Total</p>
            <p>
              {" "}
              <strong>${parseFloat(itemsPrice).toFixed(2)}</strong>{" "}
            </p>
          </section>


    </section>
  );
      
};
  
export default Pedidos;