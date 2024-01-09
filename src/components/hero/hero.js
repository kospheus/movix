//Components
import { Searchbar } from '../atoms/searchbar/searchbar';

//Assets
import heroBackground from '../../assets/movixHero.png';

function Hero() {

    return (
        <div className='hero'>
            <div className='hero__overlay'></div> {/* La div pour le dégradé */}
            <img src={heroBackground}  className='hero__img' alt='Movix catalogue' />
            <div className='hero__content'>
                <h2 className='hero__content__title'>Trouvez le film que vous cherchez</h2>
                <div className='hero__content__searchbar'>
                    <Searchbar placeholder='Film, genre, acteur, plateforme...'/>
                </div>
                <p className='hero__content__text'>Fini les heures passées devant le catalogue de Netflix, Amazon Prime ou Canal+. Créez vos playlist, votre Wishlist, et partagez les avec vos amis !</p>
            </div>
        </div>
    )
}

export default Hero;