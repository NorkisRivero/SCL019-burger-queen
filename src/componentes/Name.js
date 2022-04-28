import React from 'react';

function Name() {
    return (

        <section className='name'>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Nombre del cliente</span>
                <input type="text" className="form-control" placeholder="Nombre del cliente" aria-label="Nombre del cliente" aria-describedby="addon-wrapping"/>
            </div>


        </section>
    );
}
export default Name;