//Components
// import { Searchbar } from '../atoms/searchbar/searchbar';

//Assets
import movixlogo from '../../assets/MOVIX.svg';
// import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import {UserIcon} from '@heroicons/react/24/outline';

function HeaderDesktop() {

    return(
        <div className="header">
            <img src={movixlogo} className='header__logo' alt='Logo Movix' />
            <div className='header__cta'>
                <button className='header__cta__account'>
                    <UserIcon className='header__cta__account--icon' alt='Mon compte' />
                </button>
            </div>
        </div>
    )
}

export default HeaderDesktop;