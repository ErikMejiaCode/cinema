import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const YoutubeEmbed = () => {
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWIwNjVhMDhiMTYyZmNlZGZmZjBiMTJkMTNkZDllNCIsInN1YiI6IjYzNGY2ZWJjYTU3ZDQzMDA3YTJkY2JjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.swuFj0iLkiGjqUb_GmUuo1GSk8lufOnFY6LyLG8Eevw",
        },
      };
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}/videos?language=en-US`,
        options
      );
      const json = await response.json();
      setData(json.results);
    }
    fetchVideos();
  }, [params.id]);

  const videoKey = data[data.length - 1]?.key;

  return (
    <div className="flex flex-col">
      <span className="text-gray-900 dark:text-white mb-5 mr-5 font-bold">
        Movie Trailer:
      </span>
      <div className="aspect-w-16 aspect-h-9">
        {videoKey ? (
          <iframe
            className="my-3"
            src={`https://www.youtube.com/embed/${videoKey}`}
            title="Trailer"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        ) : (
          <span className="text-gray-900 dark:text-white">
            No Trailer Found
          </span>
        )}
      </div>
    </div>
  );
};
