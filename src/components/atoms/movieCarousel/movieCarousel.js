import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Assets
import { ClockIcon } from '@heroicons/react/24/solid';
import { HandThumbUpIcon } from '@heroicons/react/24/solid';
import {ArrowLeftIcon} from '@heroicons/react/24/outline';
import {ArrowRightIcon} from '@heroicons/react/24/outline';

function MovieCarousel({ title, movies }) {

  const sliderRef = useRef(null);

  const settings = {
      dots: false,
      arrows: false,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 3,
      responsive: [
          {
              breakpoint: 2000,
              settings: {
                slidesToShow: 7,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
          },
          {
              breakpoint: 1460,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 2,
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
              swipeToSlide: true
            }
          },
          {
            breakpoint: 620,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              swipeToSlide: true
            }
          },
          {
              breakpoint: 420,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                swipeToSlide: true
              }
          }
        ]
  };    

  return (
    <div className="movieCarousel">
      <div className="movieCarousel__header">
        <h2 className="movieCarousel__header__title">{title}</h2>
        <div className="movieCarousel__header__index">
          <button className="movieCarousel__header__index__button" onClick={()=>sliderRef.current.slickPrev()}>
            <ArrowLeftIcon className="movieCarousel__header__index__button--icon" alt="précédent"/>
          </button>
          <button className="movieCarousel__header__index__link">
            <p className="movieCarousel__header__index__link--text">Découvrir</p>
          </button>
          <button className="movieCarousel__header__index__button" onClick={()=>sliderRef.current.slickNext()}>
            <ArrowRightIcon className="movieCarousel__header__index__button--icon" alt="précédent"/>
          </button>
        </div>
      </div>

      <Slider ref={sliderRef} className="movieCarousel__inner" {...settings}>

        {movies.map((item) => (
          <div key={item.id} className="movieCarousel__item">
            <img src={item.img} className="movieCarousel__item__img" alt={item.title}/>
            <p className="movieCarousel__item__title">{item.title}</p>
            <div className="movieCarousel__item__infos">
              <div className="movieCarousel__item__infos__info">
                <ClockIcon className="movieCarousel__item__icon" alt="Durée"/>
                <p className="movieCarousel__item__text">{item.duration}</p>
              </div>
              <div className="movieCarousel__item__infos__info">
                <img src={item.plateform} className="movieCarousel__item__streaming" alt="Likes"/>
                <HandThumbUpIcon className="movieCarousel__item__icon" alt="Likes"/>
                <p className="movieCarousel__item__text">{item.likes}</p>
              </div>
            </div>
          </div>
        ))}
      
      </Slider>
        
    </div>
  )
}

export default MovieCarousel;

