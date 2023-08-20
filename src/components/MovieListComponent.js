import { MovieCard } from "../components";

export const MovieListComponent = () => {
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          <MovieCard />
        </div>
      </section>
    </main>
  );
};
