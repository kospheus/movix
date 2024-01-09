//Style
import './homepage.scss';

//Components
import Header from '../components/header/header';
import Hero from '../components/hero/hero';

function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <Hero />
    </div>
  );
}

export default Homepage;
