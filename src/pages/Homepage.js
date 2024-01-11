import React from 'react';

//Style
import './homepage.scss';

//Components
import Header from '../components/header/header';
import Hero from '../components/hero/hero';
import MovieCarousel from '../components/movieCarousel/movieCarousel';

function Homepage() {

  return (
    <div className="homepage">
      <Header />
      <Hero />
      <div className='homepage__suggestions'>
        <MovieCarousel title='Top rated' duration='1h30' likes='1.5k' />
      </div>
    </div>
  );
}

export default Homepage;
