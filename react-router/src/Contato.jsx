import React from 'react';
import Head from './Head';
import foto from './img/contato.jpg'


function Contato(){
    return (
      <div className="row animeLeft contato">
          <Head title="Contato"/>
        <div className="col-6">
          <img src={foto} alt="" />
        </div>
        <div className="col-auto">
          <ul>
            <li>Rua das Flores</li>
            <li>email@email.com</li>
          </ul>
        </div>
      </div>
    );

}

export default Contato