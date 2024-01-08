import heroBackground from '../../assets/movixHero.png';

function Hero() {
    return (
        <div className='hero'>
            <img className='hero__img' alt='Movix catalogue' src={heroBackground} />
        </div>
    )
}

export default Hero;