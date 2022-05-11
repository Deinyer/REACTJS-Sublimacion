
import CartWidget from "./CartWidget";

const  logoMenuBarraNav = require ("../imagen/logobarra.png");
const NavBar = () => {
  return (
      <>
      <div className="barranav"> 
       <img className="logomenu" src={logoMenuBarraNav} alt="logo" />
      <ul className="enlaces-menu">
        <li>
          <a className="pestana" href="/">Inicio</a>
        </li>
        <li>
          <a className="pestana" href="/Productos/Productos">Productos</a>
        </li>
        <li>
          <a className="pestana" href="/Productos/Encargos">Encargos</a>
          </li>
        <li>
          <a className="pestana" href="/Productos/Cotización">Cotización</a>
        </li>
      </ul>
       <CartWidget />
      </div>

    </>
  );
};


export default NavBar;
