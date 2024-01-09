//Style
import './homepage.scss';

//Components
import Hero from '../components/hero/hero';
import HeaderMobile from '../components/headers/headerMobile';

function Homepage() {
  return (
    <div className="homepage">
      <HeaderMobile />
      <Hero />
    </div>
  );
}

export default Homepage;
