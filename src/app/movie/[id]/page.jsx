import React from "react";

const fetchMovie = async (id) => {
  try {
    const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MY_API_KEY}&language=es-ES`;
    const movieVideosUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.MY_API_KEY}&language=es-ES`;

    const [movieDetailsResponse, movieVideosResponse] = await Promise.all([
      fetch(movieDetailsUrl),
      fetch(movieVideosUrl),
    ]);

    if (!movieDetailsResponse.ok || !movieVideosResponse.ok) {
      throw new Error("Error al obtener los datos");
    }

    const movieDetails = await movieDetailsResponse.json();
    const movieVideos = await movieVideosResponse.json();
    return { movieDetails, movieVideos };
  } catch (error) {
    console.error("Error:", error);
  }
};

async function Movie({ params }) {
  const {movieDetails, movieVideos} = await fetchMovie(params.id);
  return (
    <main className="flex mt-10">
      <section className="">
        <img
          src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
          alt={movieDetails.original_title}
          className="max-w-96 max-h-96 rounded-2xl mb-5"
        />
      </section>
      <section key={movieDetails.id} className="ml-6">
        <h1 className="font-bold text-3xl mb-4">{movieDetails.original_title}</h1>
        <p>{movieDetails.overview}</p>
        <div>
          <span>Genero: </span>
          {movieDetails.genres.map((genre) => {
            return (
              <span key={genre.id} className="ml-2">
                {genre.name}
              </span>
            );
          })}
        </div>
        <div>
          <h2 className="font-bold text-2xl mt-6">Tráiler</h2>
          {movieVideos.results.length > 0 ? (
            <iframe
              src={`https://www.youtube.com/embed/${movieVideos.results[0].key}`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
              className="mt-4"
            />
          ) : (
            <span>No hay tráiler disponible.</span>
          )}
        </div>
      </section>
    </main>
  );
}

export default Movie;
