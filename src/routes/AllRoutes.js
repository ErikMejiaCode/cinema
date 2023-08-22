import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, PageNotFound, Search } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="bg-orange-50 dark:bg-darkbg">
      <Routes>
        <Route
          path="/"
          element={
            <MovieList apiPath="movie/now_playing" title="Now Playing" />
          }
        />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route
          path="movies/popular"
          element={<MovieList apiPath="movie/popular" title="Popular" />}
        />
        <Route
          path="movies/top"
          element={<MovieList apiPath="movie/top_rated" title="Top Rated" />}
        />
        <Route
          path="movies/upcoming"
          element={<MovieList apiPath="movie/upcoming" title="Upcoming" />}
        />
        <Route path="search" element={<Search apiPath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
