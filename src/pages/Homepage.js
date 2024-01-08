//Style
import './homepage.scss';

//Components
import Hero from '../components/hero/hero';

function Homepage() {
  return (
    <div className="homepage">
      {/* <h1 className='homepage__title'>Movix</h1> */}
      <Hero />
    </div>
  );
}

export default Homepage;
