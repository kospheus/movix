import React from 'react';

//Hook
import useWindowSize from '../hooks/useWindowSize';

//Style
import './homepage.scss';

//Components
import Hero from '../components/hero/hero';
import HeaderMobile from '../components/headers/headerMobile';
import HeaderDesktop from '../components/headers/headerDesktop';

function Homepage() {

  const size = useWindowSize();

  return (
    <div className="homepage">
      {size.width < 900 && <HeaderMobile />}
      {size.width > 900 && <HeaderDesktop />}
      <Hero />
    </div>
  );
}

export default Homepage;
