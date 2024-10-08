import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
// import { useSelector } from 'react-redux';


const SecondaryContainer = () => {

  const movies = useSelector((store)=>store.movies);

  return (
    <div className='bg-black'>
    <div className='-mt-52 relative z-20'>
     <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
     <MovieList title={"Popular"} movies={movies.nowPlayingMovies}/>
     <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
     <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
</div>

     {/* 
     MovieList -Popular
        MovieCard*n 
     Movielist - Now playing
     Movielist - Horror
      */}
    </div>
  )
}

export default SecondaryContainer
