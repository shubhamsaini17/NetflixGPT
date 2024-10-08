import useNowPlayingMovies from '../Custom Hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();
  return (
    <div className='bg-black'>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {/* 
         MainContainer
          - VideoBackground
          - VideoTitle
         
         SecondaryContainer
          - MovieList * n
            - movieCards * n 
    */}
    </div>
  )
}

export default Browse;
