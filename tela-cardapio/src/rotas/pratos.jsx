import { useState, useEffect } from "react";
import "./App.css";
import Pratos from "../componentes/pratos";
import axios from "axios";

function Pratoss() {
  const [produtos, setProdutos] = useState([]);

  const getProdutos = async () => {
    try {
      const response = await axios.get("http://localhost:3001");
      const produtosServidor = response.data;
      if (produtosServidor !== produtos) {
        setProdutos(produtosServidor);
      }
    } catch (error) {
      console.log();
    }
  };

  useEffect(() => {
    if (produtos.length !== 0) {
      getProdutos();
    }
  }, [produtos]);

  useEffect(() => {
    getProdutos();
  }, []);

  // console.log(produtos.imagem);
  return (
    <div className="publicacaoContainer">
      {produtos.length > 0 &&
        produtos.map((produto) => (
          <Pratos
            titulo={produto.titulo}
            imagem={`http://localhost:3001/image/${produto.imagem}`}
            categoria={produto.categoria}
            valor={produto.valor}
            descricao={produto.descricao}
            id={produto._id}
          />
        ))}
    </div>
  );
}
export default Pratoss;
