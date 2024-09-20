import Link from "next/link"

export const NavBar = () => {
  return (
    <nav className="flex justify-between sticky backdrop-blur">
        <Link href="/" className="pl-10"><img src="/FlickNext.webp" alt="Logo de la pagina" /></Link>
      <ul className="flex justify-center items-center gap-4 pr-4">
        <li>
          <Link href="">Peliculas</Link>
        </li>
        <li>
          <Link href="">Estrenos</Link>
        </li>
        <li>
          <Link href="">Recomendados</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar