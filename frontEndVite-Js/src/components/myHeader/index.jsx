import "./header.css";
import { NavLink } from "react-router";

export default function myHeader() {
  return (
    <header className="myHeader">
      <nav>
        <NavLink to="/">Inicio</NavLink>
        <nav>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/registro">Registro</NavLink>
        </nav>
      </nav>
    </header>
  );
}
