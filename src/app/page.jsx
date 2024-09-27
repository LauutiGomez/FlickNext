import Movies from "@/components/Movies";

async function fetchMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MY_API_KEY}&language=es-ES`
  );
  const data = await res.json();
  return data;
}

async function Home() {
  const movies = await fetchMovies();

  return <Movies movies={movies} />;
}

export default Home;
