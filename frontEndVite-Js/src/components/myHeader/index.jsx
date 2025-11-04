import "./header.css";
import { NavLink } from "react-router";

export default function MyHeader() {
  return (
    <header className="myHeader">
      <nav>
        <NavLink to="/">Inicio</NavLink>
      </nav>
      <nav className="nav-rigth">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/registro">Registro</NavLink>
      </nav>
    </header>
  );
}
