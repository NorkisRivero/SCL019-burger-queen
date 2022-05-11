import React, { useContext } from 'react';
import '../css/Menu.css'
import { UserContent } from '../UseContext/UserContent';

function Name() {
    const { name, setName, table, setTable } = useContext(UserContent);
    return (

        <section className='name'>
            <div className="input-group flex-nowrap name">
                <span className="input-group-text name" id="addon-wrapping">Nombre del cliente</span>
                <input type="text" className="form-control name" placeholder="Nombre del cliente" aria-label="Nombre del cliente" aria-describedby="addon-wrapping" value={name} onChange={(e) => setName(e.target.value)}
                />
            </div>


            <select className="form-select mesas" onChange={(e) => setTable(e.target.value)} value={table}>
                <option >N° de mesa</option>
                <option value={setTable}>1</option>
                <option value={setTable}>2</option>
                <option value={setTable}>3</option>
            </select>
          

        </section>
    );
}
export default Name;