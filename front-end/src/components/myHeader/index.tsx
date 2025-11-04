import Link from "next/link"
import "./myHeader.css"

export default function MyHeader() {
    return (
        <header className="my-header">

            <Link href="/">Inicio</Link>
            <nav>
                <Link href="/login">Login</Link>
                <Link href="/registro">Registro</Link>
            </nav>
        </header>
    )
}