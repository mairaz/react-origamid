import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(){
    return(
        <div className="mb-5">
           <NavLink  to="/" className="btn btn-light me-3">Produto</NavLink>
           <NavLink  to="contato" className="btn btn-light" >Contato</NavLink>
        </div>

    )

}

export default Header