async function Home() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MY_API_KEY}&language=es-ES`
  );
  const data = await res.json();
  return (
    <div className="grid grid-cols-4 gap-10 px-10 py-4">
      {data.results.map((movie) => {
        const { id, title, poster_path, overview } = movie;
        return (
          <div key={id} className="">
            <a href={id}>
              <img
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt=""
                className="w-96 h-96"
              />
              <h1 className="font-bold mt-4 text-xl">{title}</h1>
              {/* <span className="text-sm">{overview}</span> */}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
