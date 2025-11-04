import { Link } from "react-router";
import Header from "../../components/myHeader";

export default function NotFound() {
  return (
    <>
      <h2>Essa pagina nao existe</h2>
      <Link to="/">Voltar para o inicio</Link>
    </>
  );
}
