import React from 'react'
import Slider from 'react-slick';
import './index.css';
import Slide1 from '../../../../assets/images/slider-1.png';
import Slide2 from '../../../../assets/images/slider-2.png';
import NewsLetter from '../../../newsLetter'; 

const HomeSlider = () => {
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        arrows:true
      };


  return (
    <section className='homeSlider'>
       <div className="container-fluid position-relative">
             <Slider {...settings} className='home_slider_Main'>
                 <div className='item'>
                   <img src={Slide1} className='w-100'  />
                   <div className="info">
                   <h1 className='mb-4'>
                          Don't miss amazing<br/>
                           grocery deals
                     </h1>
                     <p>Sign up for the daily newLetter</p>
                   </div>
                  </div>
                  <div className='item'>
                   <img src={Slide2} className='w-100'  />
                   <div className="info">
                   <h1 className='mb-4'>
                          Fresh Vegetables<br/>
                           Big discount
                     </h1>
                     <p>Save upto 50% off on your first order</p>
                   </div>
                  </div>
               </Slider>
              <NewsLetter/>
       </div>
    </section>
  )
}

export default HomeSlider
