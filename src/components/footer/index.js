import React from 'react';
import './style.css';
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';
import Icon4 from '../../assets/images/icon-4.svg';
import Icon5 from '../../assets/images/icon-5.svg';
import Logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SendIcon from '@mui/icons-material/Send';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import AppStoreImg from '../../assets/images/app-store.jpg';
import GooglePlayImg from '../../assets/images/google-play.jpg';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';

const Footer = () => {
  return (
    <div className="footerWrapper">
        <div className="footerBoxes">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                       <div className="box d-flex align-items-center w-100">
                          <span><img src={Icon1} /></span>
                          <div className="info">
                             <h4>Best prices & offers</h4>
                             <p>Orders $50 or more</p>
                          </div>
                       </div>
                    </div>
                    
                    <div className="col">
                       <div className="box d-flex align-items-center w-100">
                          <span><img src={Icon2} /></span>
                          <div className="info">
                             <h4>Free delivery</h4>
                             <p>24/7 amazing services</p>
                          </div>
                       </div>
                    </div>

                    <div className="col">
                       <div className="box d-flex align-items-center w-100">
                          <span><img src={Icon3} /></span>
                          <div className="info">
                             <h4>Great daily deal</h4>
                             <p>When you sign up</p>
                          </div>
                       </div>
                    </div>

                    <div className="col">
                       <div className="box d-flex align-items-center w-100">
                          <span><img src={Icon4} /></span>
                          <div className="info">
                             <h4>Wide assortment</h4>
                             <p>Mega Discounts</p>
                          </div>
                       </div>
                    </div>

                    {/* <div className="col">
                       <div className="box d-flex align-items-center w-100">
                          <span><img src={Icon5} /></span>
                          <div className="info">
                             <h4>Easy <br />returns</h4>
                             <p>Within 30 days</p>
                          </div>
                       </div>
                    </div> */}
                </div>
            </div>
        </div>



        <footer>
            <div className="container-fluid">
               <div className="row">
                <div className="col-md-3 part1">
                   <Link  to='/'><img src={Logo} /></Link>
                   <br /><br />
                   <p>Awesome grocery store website </p>
                   <br />


                   <p><LocationOnIcon/> <strong>Address:</strong>5171 W Campbell Ave undefined Kent,Utah 53127 United States</p>
                   <p><LocalPhoneIcon/> <strong>Call Us:</strong>(+91) - 540-025-124553</p>
                   <p><SendIcon/><strong>Email:</strong> sale@Nest.com</p>
                   <p><WatchLaterIcon/> <strong>Hours:</strong>10:00 - 18:00, Mon - Sat</p>
                </div> 

                <div className="col-md-6 part2">
                    <div className="row">
                        <div className="col">
                            <h4>Company</h4>
                            <ul className="footer-list mb-sm-5 mb-md-0">
                                <li><Link to="#">About Us</Link></li>
                                <li><Link to="#">Delivery Transformation</Link></li>
                                <li><Link to="#">Privacy Policy</Link></li>
                                <li><Link to="#">Terms and Conditions</Link></li>
                                <li><Link to="#">Contact Us</Link></li>
                                <li><Link to="#">Support Center</Link></li>
                                <li><Link to="#">Careers</Link></li>
                            </ul>
                        </div>

                        <div className="col">
                            <h4>Account</h4>
                            <ul className="footer-list mb-sm-5 mb-md-0">
                                <li><Link to="#">Sign In</Link></li>
                                <li><Link to="#">View Cart</Link></li>
                                <li><Link to="#">My Wishlist</Link></li>
                                <li><Link to="#">Track My Order</Link></li>
                                <li><Link to="#">Help Ticket</Link></li>
                                <li><Link to="#">Shipping Details</Link></li>
                                <li><Link to="#">Compare products</Link></li>
                            </ul>
                        </div>


                        <div className="col">
                            <h4>Corporate</h4>
                            <ul className="footer-list mb-sm-5 mb-md-0">
                                <li><Link to="#">Become a Vendor</Link></li>
                                <li><Link to="#">Affiliate Program</Link></li>
                                <li><Link to="#">Farm Business</Link></li>
                                <li><Link to="#">Farm Careers</Link></li>
                                <li><Link to="#">Our Suppliers</Link></li>
                                <li><Link to="#">Accessibility</Link></li>
                                <li><Link to="#">Promotions</Link></li>
                            </ul>
                        </div>

                        <div className="col">
                            <h4>Popular</h4>
                            <ul className="footer-list mb-sm-5 mb-md-0">
                                <li><Link to="#">Milk & Flavoured Milk</Link></li>
                                <li><Link to="#">Butter and Margarine</Link></li>
                                <li><Link to="#">Eggs Substitutes</Link></li>
                                <li><Link to="#">Marmalades</Link></li>
                                <li><Link to="#">Sour Cream and Dips</Link></li>
                                <li><Link to="#">Tea & Kombucha</Link></li>
                                <li><Link to="#">Cheese</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>



                <div className="col-md-3 part3">
                    <h3>Install App</h3>
                    <br />
                    <p>From App Store or Google Play</p>


                    <div className="d-flex">
                        <Link to={''}><img src={AppStoreImg} width={150}/></Link>
                        <Link to={''}><img src={GooglePlayImg}width={150} className='mx-2'/></Link>
                    </div>
                </div>
               </div>
               <hr />


               <div className="row lastStrip">
                  <div className="col-md-3">
                     <p>© 2024, Nest - HTML Ecommerce Template
                     All rights reserved</p>
                  </div>
                  <div className="col-md-6">
                    <div className="m-auto d-flex align-items-center">
                    <div className='phNo d-flex align-items-center mx-5'>
                        <span><HeadphonesOutlinedIcon /></span>
                        <div className='info ml-3'>
                            <h3 className='text-g mb-0'>1900 - 888</h3>
                                <p className='mb-0'>24/7 Support Center</p>
                           </div>
                   </div>
                   <div className='phNo d-flex align-items-center mx-5'>
                        <span><HeadphonesOutlinedIcon /></span>
                        <div className='info ml-3'>
                            <h3 className='text-g mb-0'>1900 - 6666</h3>
                                <p className='mb-0'>Working 8:00 - 22:00</p>
                           </div>
                   </div>
                    </div>   
                  </div>
                  <div className="col-md-3">
                    <h4>Follow Us</h4>
                  </div>
               </div>
            </div>
        </footer>
       
    </div>
  )
}

export default Footer
