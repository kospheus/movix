import heroBackground from '../../assets/movixHero.png';

function Hero() {
    return (
        <div className='hero'>
            <img src={heroBackground}  className='hero__img' alt='Movix catalogue' />
        </div>
    )
}

export default Hero;