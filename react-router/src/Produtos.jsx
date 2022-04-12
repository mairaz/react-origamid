import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Head from './Head'

function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(async () => {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto`
    );
    const data = await response.json();
    setProdutos(data);
  }, []);
  if (produtos === null) return null;
  return (
    <>
    <Head title="Produtos"/>
      <div className="row animeLeft">
        {produtos.map((produto) => {
          return (
            <div className="col-4 mb-5 mt-2" key={produto.id}>
              <Link to={`produto/${produto.id}`}>
                <img src={produto.fotos[0].src} alt="" />
                <h4>{produto.nome}</h4>
              </Link>{" "}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Produtos;
