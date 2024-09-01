import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Custom Hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&fs=0&disablekb=1&iv_load_policy=3&showinfo=0&loop=1&playsinline=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
