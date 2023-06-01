import { Link } from "react-router-dom";
import "./style.css";
function Buton() {
  return (
    <div className="container">
      <button>
        <Link className="link" to="/Pratos">
          Cardápio
        </Link>
      </button>
      {/* <button>
        <Link className="link" to="/Sobremesas">
          Sobremesas
        </Link>
      </button>
      <button>
        <Link className="link" to="/Bebidas">
          Bebidas
        </Link>
      </button> */}
    </div>
  );
}

export default Buton;
