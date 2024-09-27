import Link from "next/link";

const Movies = ({ movies }) => {
  return (
    <ul className="grid grid-cols-4 gap-10">
      {movies.results.map((movie) => {
        const { id, original_title, poster_path} = movie;
        return (
          <li
            key={id}
            className="hover:scale-105 transition-transform ease-in-out delay-150"
            onClick={() => {}}
          >
            <Link href={`/movie/${id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt={`Imagen de la pelicula:${original_title}`}
                className="rounded-2xl"
              />
              <h1 className="font-bold mt-4 text-xl">{original_title}</h1>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Movies;
