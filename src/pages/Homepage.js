import React from 'react';

//Data
import topMoviesData from '../data/topMovies';
import newMoviesData from '../data/newMovies';

//Style
import './homepage.scss';

//Components
import Header from '../components/header/header';
import Hero from '../components/hero/hero';
import MovieCarousel from '../components/atoms/movieCarousel/movieCarousel';

function Homepage() {

  return (
    <div className="homepage">
      <Header />
      <Hero />
      <div className='homepage__suggestions'>
        <MovieCarousel title='Les mieux notés' movies={topMoviesData || []} />
        <MovieCarousel title='Nouveautés' movies={newMoviesData || []} />
      </div>
    </div>
  );
}

export default Homepage;
