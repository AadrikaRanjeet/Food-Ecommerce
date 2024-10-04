import React, { useState, useRef } from 'react';
import './style.css';
import Slider from 'react-slick';

const CatSlider = () => { // Note the capital 'C'

    const [itemBg, setItemBg] = useState([
        '#F4F6FA',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec',
        '#fff3eb'
    ]);

    const slider = useRef(null);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        autoplay:2000,
        centerMode:true
    };

    return (
        <>
            <div className="catSlider">
                <div className="container-fluid">
                    <h2 className='hd'>Feature Categories</h2>
                    <Slider {...settings} className='cat_slider_Main' id="cat_slider_Main">
                        {
                            itemBg.length !== 0 && itemBg.map((item, index) => {
                                return (
                                    <div className="item" key={index}>
                                        <div className="info" style={{ background: item }}>
                                            <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-4.png" alt="" />
                                            <h5>Cakes and Milks</h5>
                                            <p>26 items</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
            
        </>
    )
}

export default CatSlider; // Note the capital 'C'
