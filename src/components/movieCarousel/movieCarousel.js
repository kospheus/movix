import React from "react";

import movieImg from "../../assets/endgame.jpg";
import netflix from "../../assets/icons/netflix.png";
import { ClockIcon } from '@heroicons/react/24/solid';
import { HandThumbUpIcon } from '@heroicons/react/24/solid';

function MovieCarousel() {
    return (
        <div className="movieCarousel">
            <h2 className="movieCarousel__title">Top movies</h2>
            <div className="movieCarousel__inner">

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

            </div>
        </div>
    )
}

export default MovieCarousel;


