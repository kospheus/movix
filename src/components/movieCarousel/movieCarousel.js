import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import movieImg from "../../assets/endgame.jpg";
import netflix from "../../assets/icons/netflix.png";
import { ClockIcon } from '@heroicons/react/24/solid';
import { HandThumbUpIcon } from '@heroicons/react/24/solid';
import {ArrowLeftIcon} from '@heroicons/react/24/outline';
import {ArrowRightIcon} from '@heroicons/react/24/outline';

function MovieCarousel() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                  slidesToShow: 7,
                  slidesToScroll: 4,
                  infinite: true,
                  dots: true
                }
            },
            {
                breakpoint: 1460,
                settings: {
                  slidesToShow: 6,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
            },
            {
                breakpoint: 1240,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
                }
            },
            {
              breakpoint: 1020,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 840,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 620,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
      };

    return (
        <div className="movieCarousel">
            <div className="movieCarousel__header">
                <h2 className="movieCarousel__header__title">Top movies</h2>
                <div className="movieCarousel__header__index">
                    <button className="movieCarousel__header__index__button">
                        <ArrowLeftIcon className="movieCarousel__header__index__button--icon" alt='Précédent'/>
                    </button>
                    <div className='movieCarousel__header__index__indicator'>
                        <button className='movieCarousel__header__index__indicator__button'>
                                <div className='movieCarousel__header__index__indicator__button--icon'></div>
                        </button>
                        <button className='movieCarousel__header__index__indicator__button'>
                                <div className='movieCarousel__header__index__indicator__button--icon'></div>
                        </button>
                        <button className='movieCarousel__header__index__indicator__button'>
                                <div className='movieCarousel__header__index__indicator__button--icon'></div>
                        </button>
                    </div>
                    <button className="movieCarousel__header__index__button">
                        <ArrowRightIcon className="movieCarousel__header__index__button--icon" alt='Précédent'/>
                    </button>
                </div>
            </div>

            <Slider className="movieCarousel__inner" {...settings}>

                
                <div className="movieCarousel__item">
                    <img src={movieImg} className="movieCarousel__item__img" alt="Movie Img"/>
                    <div className="movieCarousel__item__infos">
                        <div className="movieCarousel__item__infos__info">
                            <ClockIcon className="movieCarousel__item__icon" alt="Durée"/>
                            <p className="movieCarousel__item__text">1h30</p>
                        </div>
                        <div className="movieCarousel__item__infos__info">
                            <img src={netflix} className="movieCarousel__item__streaming" alt="Likes"/>
                            <HandThumbUpIcon className="movieCarousel__item__icon" alt="Likes"/>
                            <p className="movieCarousel__item__text">1.5k</p>
                        </div>
                    </div>
                </div>

                <div className="movieCarousel__item">
                    <img src={movieImg} className="movieCarousel__item__img" alt="Movie Img"/>
                    <div className="movieCarousel__item__infos">
                        <div className="movieCarousel__item__infos__info">
                            <ClockIcon className="movieCarousel__item__icon" alt="Durée"/>
                            <p className="movieCarousel__item__text">1h30</p>
                        </div>
                        <div className="movieCarousel__item__infos__info">
                            <img src={netflix} className="movieCarousel__item__streaming" alt="Likes"/>
                            <HandThumbUpIcon className="movieCarousel__item__icon" alt="Likes"/>
                            <p className="movieCarousel__item__text">1.5k</p>
                        </div>
                    </div>
                </div>

                <div className="movieCarousel__item">
                    <img src={movieImg} className="movieCarousel__item__img" alt="Movie Img"/>
                    <div className="movieCarousel__item__infos">
                        <div className="movieCarousel__item__infos__info">
                            <ClockIcon className="movieCarousel__item__icon" alt="Durée"/>
                            <p className="movieCarousel__item__text">1h30</p>
                        </div>
                        <div className="movieCarousel__item__infos__info">
                            <img src={netflix} className="movieCarousel__item__streaming" alt="Likes"/>
                            <HandThumbUpIcon className="movieCarousel__item__icon" alt="Likes"/>
                            <p className="movieCarousel__item__text">1.5k</p>
                        </div>
                    </div>
                </div>

                <div className="movieCarousel__item">
                    <img src={movieImg} className="movieCarousel__item__img" alt="Movie Img"/>
                    <div className="movieCarousel__item__infos">
                        <div className="movieCarousel__item__infos__info">
                            <ClockIcon className="movieCarousel__item__icon" alt="Durée"/>
                            <p className="movieCarousel__item__text">1h30</p>
                        </div>
                        <div className="movieCarousel__item__infos__info">
                            <img src={netflix} className="movieCarousel__item__streaming" alt="Likes"/>
                            <HandThumbUpIcon className="movieCarousel__item__icon" alt="Likes"/>
                            <p className="movieCarousel__item__text">1.5k</p>
                        </div>
                    </div>
                </div>

                <div className="movieCarousel__item">
                    <img src={movieImg} className="movieCarousel__item__img" alt="Movie Img"/>
                    <div className="movieCarousel__item__infos">
                        <div className="movieCarousel__item__infos__info">
                            <ClockIcon className="movieCarousel__item__icon" alt="Durée"/>
                            <p className="movieCarousel__item__text">1h30</p>
                        </div>
                        <div className="movieCarousel__item__infos__info">
                            <img src={netflix} className="movieCarousel__item__streaming" alt="Likes"/>
                            <HandThumbUpIcon className="movieCarousel__item__icon" alt="Likes"/>
                            <p className="movieCarousel__item__text">1.5k</p>
                        </div>
                    </div>
                </div>

                <div className="movieCarousel__item">
                    <img src={movieImg} className="movieCarousel__item__img" alt="Movie Img"/>
                    <div className="movieCarousel__item__infos">
                        <div className="movieCarousel__item__infos__info">
                            <ClockIcon className="movieCarousel__item__icon" alt="Durée"/>
                            <p className="movieCarousel__item__text">1h30</p>
                        </div>
                        <div className="movieCarousel__item__infos__info">
                            <img src={netflix} className="movieCarousel__item__streaming" alt="Likes"/>
                            <HandThumbUpIcon className="movieCarousel__item__icon" alt="Likes"/>
                            <p className="movieCarousel__item__text">1.5k</p>
                        </div>
                    </div>
                </div>

                <div className="movieCarousel__item">
                    <img src={movieImg} className="movieCarousel__item__img" alt="Movie Img"/>
                    <div className="movieCarousel__item__infos">
                        <div className="movieCarousel__item__infos__info">
                            <ClockIcon className="movieCarousel__item__icon" alt="Durée"/>
                            <p className="movieCarousel__item__text">1h30</p>
                        </div>
                        <div className="movieCarousel__item__infos__info">
                            <img src={netflix} className="movieCarousel__item__streaming" alt="Likes"/>
                            <HandThumbUpIcon className="movieCarousel__item__icon" alt="Likes"/>
                            <p className="movieCarousel__item__text">1.5k</p>
                        </div>
                    </div>
                </div>

                <div className="movieCarousel__item">
                    <img src={movieImg} className="movieCarousel__item__img" alt="Movie Img"/>
                    <div className="movieCarousel__item__infos">
                        <div className="movieCarousel__item__infos__info">
                            <ClockIcon className="movieCarousel__item__icon" alt="Durée"/>
                            <p className="movieCarousel__item__text">1h30</p>
                        </div>
                        <div className="movieCarousel__item__infos__info">
                            <img src={netflix} className="movieCarousel__item__streaming" alt="Likes"/>
                            <HandThumbUpIcon className="movieCarousel__item__icon" alt="Likes"/>
                            <p className="movieCarousel__item__text">1.5k</p>
                        </div>
                    </div>
                </div>

                <div className="movieCarousel__item">
                    <img src={movieImg} className="movieCarousel__item__img" alt="Movie Img"/>
                    <div className="movieCarousel__item__infos">
                        <div className="movieCarousel__item__infos__info">
                            <ClockIcon className="movieCarousel__item__icon" alt="Durée"/>
                            <p className="movieCarousel__item__text">1h30</p>
                        </div>
                        <div className="movieCarousel__item__infos__info">
                            <img src={netflix} className="movieCarousel__item__streaming" alt="Likes"/>
                            <HandThumbUpIcon className="movieCarousel__item__icon" alt="Likes"/>
                            <p className="movieCarousel__item__text">1.5k</p>
                        </div>
                    </div>
                </div>

                <div className="movieCarousel__item">
                    <img src={movieImg} className="movieCarousel__item__img" alt="Movie Img"/>
                    <div className="movieCarousel__item__infos">
                        <div className="movieCarousel__item__infos__info">
                            <ClockIcon className="movieCarousel__item__icon" alt="Durée"/>
                            <p className="movieCarousel__item__text">1h30</p>
                        </div>
                        <div className="movieCarousel__item__infos__info">
                            <img src={netflix} className="movieCarousel__item__streaming" alt="Likes"/>
                            <HandThumbUpIcon className="movieCarousel__item__icon" alt="Likes"/>
                            <p className="movieCarousel__item__text">1.5k</p>
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    )
}

export default MovieCarousel;


