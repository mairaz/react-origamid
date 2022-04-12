import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import Head from './Head'

function Produto (){
    const params = useParams()
    const [produto, setProduto] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(async () => {
        try{
            const response = await fetch(
          `https://ranekapi.origamid.dev/json/api/produto/${params.id}`
        );
        const data = await response.json();
        setProduto(data);  
        }finally{
            setLoading(false)
        }
      
        
      }, []);

    if(loading) return <p>carregando...</p>
    if(produto === null) return null
    return(
        <>
        <Head title={`Produto | ${produto.nome}`} />
         <div className="animeLeft">
            <div className="row g-2 space-between">
                <div className="col-6">
                   <h4>{produto.nome }</h4>
                   {produto.fotos.map((foto)=>(<div className="mt-5"><img src={foto.src} alt={foto.descricao} /></div>))}
                </div>
                <div className="col-6 mt-5">
                   <p>{ produto.descricao }</p> 
                   <span className='bg-warning p-3'> R$ {produto.preco}</span>
                </div>
            </div>
        </div>
        </>  
    )
}


export default Produto