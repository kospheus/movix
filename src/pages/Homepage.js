import React from 'react';

//Style
import './homepage.scss';

//Components
import Hero from '../components/hero/hero';
import Header from '../components/header/header';

function Homepage() {

  return (
    <div className="homepage">
      <Header />
      <Hero />
    </div>
  );
}

export default Homepage;
