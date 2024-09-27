import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="flex justify-between sticky backdrop-blur h-24">
      <Link href="/" className="flex items-center">
        <img
          src="/FlickNext.webp"
          alt="Logo de la pagina"
          className="h-24 w-72"
        />
      </Link>
      <ul className="flex justify-center items-center gap-4 px-10">
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
  );
};

export default NavBar;
