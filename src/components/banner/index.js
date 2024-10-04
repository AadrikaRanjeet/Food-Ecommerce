import React from 'react';
import Banner1 from '../../assets/images/Banner-1.jpg';
import Banner2 from '../../assets/images/Banner-2.jpg';
import Banner3 from '../../assets/images/Banner-3.jpg';
import './style.css';


const Banner = () => {
  return (
   <div className="bannerSelection">
       <div class="container text-center">
  <div class="row">
    <div class="col">
        <div className="box">
        <img src={Banner1} className='banner-image' alt="" />
        </div>
    </div>
    <div class="col">
       <div className="box">
       <img src={Banner2}className='banner-image'  alt="" />
       </div>
    </div>
    <div class="col">
       <div className="box">
       <img src={Banner3} className='banner-image' alt="" />
       </div>
    </div>
  </div>
</div>
   </div>
  )
}

export default Banner
