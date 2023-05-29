import "./App.css";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Buton from "./componentes/buton";
import Pratos from "./rotas/pratos";
import Bebidas from "./componentes/bebidas";
import Sobremesas from "./componentes/sobremesas";

function App() {
  return (
    <div className="container">
      <div className="logo">
        <h1>Cozinha Mineira</h1>
        <h3>menu</h3>
      </div>
      <Router>
        <Buton></Buton>
        <Routes>
          <Route path="/Pratos" element={<Pratos />} />
          <Route path="/Sobremesas" element={<Sobremesas />} />
          <Route path="/Bebidas" element={<Bebidas />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
