import "./style.css";

function Pratos({ titulo, imagem, categoria, valor, descricao }) {
  return (
    <div className="produto-card">
      <h4>{titulo}</h4>
      <div className="imagem">
        <img src={imagem} />
      </div>
      <span>Categoria: {categoria}</span>
      <p>
        <span>Valor:R${valor}</span>
      </p>
      <p>
        <span>Descrição:</span>{" "}
        <div className="descr">
          <span>{descricao}</span>
        </div>
        {/* <div className="leia">
          <button id="btn">Leia mais</button>
        </div> */}
      </p>
    </div>
  );
}

export default Pratos;
