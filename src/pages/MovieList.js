import { MovieCard } from "../components";
import { useFetch, useTitle } from "../hooks";

export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);

  //eslint-disable-next-line
  const pageTitle = useTitle(`${title} / Cinema`);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
