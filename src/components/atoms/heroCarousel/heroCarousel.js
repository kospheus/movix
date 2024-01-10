import React, { useState } from 'react';

//Data
import heroCarouselData from '../../../data/heroCarouselItems';

//Assets
import {HandThumbUpIcon} from '@heroicons/react/24/outline';
import {PlusIcon} from '@heroicons/react/24/outline';
import {ArrowLeftIcon} from '@heroicons/react/24/outline';
import {ArrowRightIcon} from '@heroicons/react/24/outline';

export const HeroCarousel = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = heroCarouselData.length - 1;
        } else if (newIndex >= heroCarouselData.length) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    }

    return (
        <div className='heroCarousel'>
            <div className='heroCarousel__inner'
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}>

                {heroCarouselData.map((item) => (
                    <div key={item.id} className='heroCarousel__item'>
                        <img src={item.img} className='heroCarousel__item__img' alt={item.alt}/>
                        <div className='heroCarousel__item__img--overlay'></div>
                        <div className='heroCarousel__item__content'>
                            <h2 className='heroCarousel__item__content--title'>{item.title}</h2>
                            <p className='heroCarousel__item__content--description'>{item.description}</p>
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
                ))}
                
            </div>
            <div className='heroCarousel__index'>
                <button className='heroCarousel__index__arrow'
                onClick={() => { updateIndex(activeIndex - 1) }}>
                    <ArrowLeftIcon className='heroCarousel__index__arrow--icon' alt='Précédent' />
                </button>
                <div className='heroCarousel__index__indicator'>
                    {heroCarouselData.map((item, index) => {
                        return (
                            <button key={item.id} className='heroCarousel__index__indicator__button'
                            onClick={() => { updateIndex(index) }}>
                                <div className={`heroCarousel__index__indicator__button--icon${index === activeIndex ? '--active' : '' }`}></div>
                            </button>
                        )
                    })}
                </div>
                <button className='heroCarousel__index__arrow'
                onClick={() => { updateIndex(activeIndex + 1) }}>
                    <ArrowRightIcon className='heroCarousel__index__arrow--icon' alt='Précédent' />
                </button>
            </div>
        </div>
    )
};