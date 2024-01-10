import React, { useState } from 'react';

//Data
import heroCarouselItems from '../../../data/heroCarouselItems';

//Assets
import {HandThumbUpIcon} from '@heroicons/react/24/outline';
import {PlusIcon} from '@heroicons/react/24/outline';

//datatest
import nightCallImg from '../../../assets/movies/Nightcall.jpg';

export const HeroCarousel = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className='heroCarousel'>
            <div className='heroCarousel__inner'
            style={{ transform: `translate:(-${activeIndex * 100})` }}>

                <div className='heroCarousel__item'>
                    <img src={nightCallImg} className='heroCarousel__item__img' alt='Nightcall'/>
                    <div className='heroCarousel__item__img--overlay'></div>
                    <div className='heroCarousel__item__content'>
                        <h2 className='heroCarousel__item__content--title'>Nightcall</h2>
                        <p className='heroCarousel__item__content--description'>Oiseau de nuit asocial, Lou fait une halte sur le site d'un accident de la route. Fasciné par le travail des caméramans pigistes guidés sur les lieux par les radars de la police, le jeune voleur décide de faire de ce métier sa nouvelle vocation.</p>
                        <div className='heroCarousel__item__content__cta'>
                            <button className='heroCarousel__item__content__cta__voir'>
                                <p className='heroCarousel__item__content__cta__voir--text'>Découvrir</p>
                            </button>
                            <button className='heroCarousel__item__content__cta__like'>
                                <HandThumbUpIcon className='heroCarousel__item__content__cta__like--icon' alt='Like' />
                            </button>
                            <button className='heroCarousel__item__content__cta__add'>
                                <PlusIcon className='heroCarousel__item__content__cta__add--icon' alt='Ajouter' />
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
};