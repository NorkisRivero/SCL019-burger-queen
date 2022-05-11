import React, { useContext } from "react";
import { UserContent } from '../UseContext/UserContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {db} from '../firebase/firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import Name from './Name';


export default function Pedidos() {
  const {cart, setCart, name, setName, table, setTable} = useContext(UserContent);
//   const inputName = useRef();
//  const inputTable = useRef();

  const sendOrder = async(e) => {
    e.preventDefault();
    try{
      const docRef = await addDoc(collection(db, 'orders'), {
        client: name,
        table: table,
        // total: total,
        order: cart,
        status: 'Pendiente',
        dateOrder: Timestamp.fromDate(new Date())
      });
      console.log(docRef);

    }catch(e) {
      console.log('error', e)
    }
    setName('');
    setCart([]);
    setTable('');
  };
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

       const total = cart.reduce((a, c) => a + c.cant * c.price, 0);

       const cancelOrder = (evt) => {
            evt.preventDefault();
            name.current.value = "";
            table.current.value = "";
            setCart([]);
          };

       return(
         <form onSubmit={(e) => sendOrder(e)}>
           <Name/>

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
                    onClick={() => deleteProduct(item.id)} />
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
           <strong>${parseFloat(total)}</strong>{" "}
         </p>
       </section>
       <div>
           <button type='submit' className="btn btn-primary send" onClick={cancelOrder} >Cancelar</button>
           <button  type='submit' className="btn btn-primary send" onClick={sendOrder} >Enviar a Cocina</button>
         </div>


         </form>
       )

}













// const Pedidos = () => {
//   const { cart, setCart } = useContext(UserContent);
//   const itemsPrice = cart.reduce((a, c) => a + c.cant * c.price, 0);
//   const inputName = useRef();
//   const inputTable = useRef();


//   const deleteProduct = (id) => {
//     const existProducts = cart.find((item) => item.id === id);
//     if (existProducts.cant === 1) {
//       setCart(cart.filter((item) => item.id !== id));
//     } else {
//       setCart(
//         cart.map((item) =>
//           item.id === id
//             ? { ...existProducts, cant: existProducts.cant - 1 }
//             : item
//         )
//       )
//     }
//   }

//   const sendOrder = (e) => {
//     e.preventDefault();
//     let order = {};
//     order.name = inputName.current.value || "No Name";
//     order.table = inputTable.current.value;
//     order.products = cart;
//     order.created_at = new Date();
//     order.status = "pending";

//     db.collection("orders")
//       .add(order)
//       .then(() => {
//         inputName.current.value = "";
//         inputTable.current.value = "";
//         setCart([]);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

    

//   const cancelOrder = (evt) => {
//     evt.preventDefault();
//     inputName.current.value = "";
//     inputTable.current.value = "";
//     setCart([]);
//   };

//   return (

//     <section>
//       <form type="submit" action="">
//       <section className='name'>
//             <div className="input-group flex-nowrap name">
//                 <span className="input-group-text name" id="addon-wrapping">Nombre del cliente</span>
//                 <input type="text" className="form-control" placeholder="Nombre del cliente" ref={inputName}/>
//             </div>
//         </section> 
//         <section className='mesas'>
//             <select className="form-select mesas" ref={inputTable}>
//                 <option >N° de mesa</option>
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//             </select>
//         </section>

        

//       <table className="table">
//         <thead>
//           <tr>
//             <th scope="col">Cantidad</th>
//             <th scope="col">Producto</th>
//             <th scope="col">Precio</th>
//             <th scope="col">Eliminar</th>
//           </tr>
//         </thead>
//         {cart.map(item => {
//           return (
//             <tbody>
//               <tr>
//                 <th scope="row">{item.cant}</th>
//                 <td> {item.name}</td>
//                 <td> {item.price}</td>
//                 <td>
//                   <FontAwesomeIcon icon={faTrash}
//                     onClick={() => deleteProduct(item.id)} />
//                 </td>
//               </tr>
//             </tbody>
//           )
//         })}
//       </table>

//       <section className="tfoot">
//         <p className="result"></p>
//         <p colSpan="2"> Total</p>
//         <p>
//           {" "}
//           <strong>${parseFloat(itemsPrice)}</strong>{" "}
//         </p>
//       </section>
//       <div>
//           <button type='submit' className="btn btn-primary send" onClick={cancelOrder} >Cancelar</button>
//           <button  type='submit' className="btn btn-primary send" onClick={sendOrder} >Enviar a Cocina</button>
//         </div>

//       </form>
//     </section>
//   );

// };


// export default Pedidos;