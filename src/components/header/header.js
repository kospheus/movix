import React, { useState } from 'react';

//Assets
import movixlogo from '../../assets/MOVIX.svg';
import burger from '../../assets/icons/burger.svg'
import searchIcon from '../../assets/icons/search.svg';


function Header() {
    const [showMenu, setMenu] = useState();

    function display() {
        setMenu(value=>!value)
      }

    return(
        <div className="header">
            <img src={movixlogo} className='header__logo' alt='Logo Movix' />
            <button className="header__burger" onClick={display}>
                <img src={burger} alt='menu' className='header__burger--icon'/>
            </button>
            <nav className={`header__nav${showMenu?' active':null}`}>
                <ul className='header__nav--ul'>
                    <li className='header__nav--li'>Home</li>
                    <li className='header__nav--li'>Mes Listes</li>
                    <li className='header__nav--li'>Mon Compte</li>
                </ul>
            </nav>
            <div className='header__search'>
                <img src={searchIcon} className='header__search--icon' alt='Search'/>
            </div>
        </div>
    )
}

export default Header;