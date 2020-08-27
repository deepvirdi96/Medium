import React from 'react';
import Slider from "react-slick";
import './CategorySlider.css';


const CategorySlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: false,
        centerMode: false,
        adaptiveHeight: true,
        arrows: true,
        className: 'slides',
    };

    return (
        <div className="mainContainer__categorySlider">
            <Slider {...settings}>
                <p>content</p>
                <p>content</p>
                <p>content</p>
                <p>content</p>
                <p>content</p>
                <p>content</p>
                <p>content</p>
                <p>content</p>
                <p>content</p>
                <p>content</p>
                <p>content</p>
                <p>content</p>
                <p>content</p>
                <p>content</p>
            </Slider>
        </div>
    );
}

export default CategorySlider;
