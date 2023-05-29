import "./style.css";


function Pratos({
 
  titulo,
  imagem,
  categoria,
  valor,
  descricao,
  
}) {
  return (
    <div className="produto-card">
      <h4>{titulo}</h4>
      <div className="imagem">
        <img src={imagem} />
      </div>
      <span>Categoria:</span> {categoria}
      <p>
        <span>Valor:</span> R${valor}
      </p>
      <p>
        <span>Descrição:</span> <div className="descr">{descricao}</div>
        <div className="leia">
          <button id="btn">Leia mais</button>
        </div>
      </p>
    </div>
  )
}

export default Pratos;
