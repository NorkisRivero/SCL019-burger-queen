import { db } from "../firebase/firebaseConfig";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import '../css/Cocina.css';
import Nav from '../componentes/Nav';

const Orders = collection(db, 'orders');
const getOrders = async () => {
  const result = await getDocs(query(Orders), orderBy('dateOrder', 'desc'));
  return result;

}


function Cocina() {

  const [ordenes, setOrdenes] = useState([]);
  useEffect(() => {
    getOrdersData();
  }, []);

  const getOrdersData = async () => {
    const p = await getOrders();
    setOrdenes(p.docs)
  }
  return (
    <div className="pedido-container">
      <Nav />
      <div className="pedido-cocina">
        {ordenes.map(element => {
          return (
            <section className="card">
              <table className="table-pedido card">
                <tbody className="container">
                  <div className="div-name">
                    <p className="name" >Name: {element.data().client}</p>
                    <p className="mesa">Mesa: {element.data().table}</p>
                  </div>
                  <hr></hr>
                  <thead>
                    <tr>
                      <th>Cantidad</th>
                      <th>Pedido</th>
                    </tr>
                  </thead>

                  {element.data().order.map(item => {
                    return (
                      <tr>
                        <td>{item.cant} </td>
                        <td>{item.name} </td>
                        {/* <td>{item.price} </td> */}
                      </tr>
                    )

                  })}
                  <hr></hr>
                  {/* <p> Total: {element.data().total} </p> */}
                  <p> Estado: {element.data().status} </p>
                </tbody>
                <button>Pedido Listo</button>
              </table>
              
            </section>
          )
        })}
      </div>
    </div>
  )
}









export default Cocina;