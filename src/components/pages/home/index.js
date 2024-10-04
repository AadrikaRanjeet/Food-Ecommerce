import React from 'react';
import SliderBanner from './slider/index';
import Slider from 'react-slick';
import CatSlider from '../../catSlider';
import Banner from '../../banner';
import Product from '../../product';
import './style.css';
import Banner4 from '../../../assets/images/banner-4.png';
import TopProducts from './TopProducts';
import NewsLetterImg from '../../../assets/images/banner-9.png';
import { Link } from 'react-router-dom';
import NewsLetter from '../../newsLetter';
import Footer from '../../footer';




const Home = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade:false,
    arrows:true,
    
  };




  return (
    <>
      <SliderBanner />
      <CatSlider />
      <Banner />

      <section className='homeProducts'>
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className='hd mb-0 mt-0'>Popular Products</h2>
            <ul className="list list-inline filterTab">
              <li className="list-inline-item">
                <a className="cursor">All</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Milk & Dairies</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Coffee and Teas</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Pets & foods</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Meats</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Fruits</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Vegetables</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container text-center">
          <div className="row">
            <div className="col">
              <Product tag="hot"/>
            </div>
            <div className="col">
              <Product tag="best"/>
            </div>
            <div className="col">
              <Product tag="new" />
            </div>
            <div className="col">
              <Product tag="sale"/>
            </div>
            <div className="col">
              <Product tag="hot" />
            </div>
            <div className="col">
              <Product tag="best" />
            </div>
            <div className="col">
              <Product tag="new" />
            </div>
            <div className="col">
              <Product tag="sale"/>
            </div>
            <div className="col">
              <Product tag="hot" />
            </div>
            <div className="col">
              <Product tag="best" />
            </div>
          </div>
        </div>
      </section>

     <br/> <br/> 


      <section className='homeProducts homeProductsRow2 pt-0'>
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className='hd mb-0 mt-0'>Daily Best Sells</h2>
            <ul className="list list-inline filterTab">
              <li className="list-inline-item">
                <a className="cursor">Featured</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Popular</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">New Added</a>
              </li>
            </ul>
          </div>


          <div className="row">
            <div className="col-md-3 pr-5">
            <img src={Banner4} className='w-100 mt-4' />
            </div>

            <div className="col-md-9">
            <Slider {...settings} className='prodSlider'>
             
               <div className="item">
               <Product tag="sale"/>
               </div>
                
               <div className="item">
               <Product tag="hot"/>
               </div>

               <div className="item">
               <Product tag="best"/>
               </div>

               <div className="item">
               <Product tag="new"/>
               </div>

             </Slider>
            </div>
          </div>
        </div>

        
      </section>


      <section className="topProductSection">
           <div className="container-fluid">
              <div className="row">
                  <div className="col">
                    <TopProducts title="Top Selling"/>
                  </div>

                  <div className="col">
                  <TopProducts title="Trending Products"/>
                  </div>

                  <div className="col">
                     <TopProducts title="Recently Added"/>
                  </div>

                  <div className="col">
                      <TopProducts title="Top Rated"/>
                  </div>
              </div>
           </div>
      </section>

     
      <section className="newsLetterSection">
        <div className="container-fluid">
           <div className="box d-flex align-items-center">
              <div className="info">
                 <h2>Stay home & get your daily
                 <br />needs from our shop</h2>
                 <p>Start You'r Daily Shopping with <Link>Nest Mart</Link></p>
                  <br /><br />
                 <NewsLetter/>
              </div>

              <div className="img">
                 <img src={NewsLetterImg} className='w-100' />
              </div>
           </div>
        </div>
      </section>

       


      <Footer/> 





    </>
  );
}

export default Home;
