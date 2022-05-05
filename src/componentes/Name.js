import React from 'react';
import '../css/Menu.css'

function Name() {
    return (

        <section className='name'>
            <div className="input-group flex-nowrap name">
                <span className="input-group-text name" id="addon-wrapping">Nombre del cliente</span>
                <input type="text" className="form-control name" placeholder="Nombre del cliente" aria-label="Nombre del cliente" aria-describedby="addon-wrapping"/>
            </div>


        </section>
    );
}
export default Name;