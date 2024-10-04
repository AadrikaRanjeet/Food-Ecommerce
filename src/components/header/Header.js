// src/components/header/Header.js
import React, { useState, useEffect } from 'react';
import '../header/header.css';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import logo from '../../assets/images/logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import Select from '../Select';
import axios from 'axios';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import iconCompare from '../../assets/images/compare.png';
import iconCart from '../../assets/images/cart.png';
import iconAccount from '../../assets/images/account.png';
import iconWishlist from '../../assets/images/wishlist.png';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Nav from './nav/nav';

const Header = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [categories] = useState([
    'All Categories',
    'Milks and Dairies',
    'Wines & Drinks',
    'Clothing & beauty',
    'Fresh Seafood',
    'Pet Foods & Toy',
    'Baking Material',
    'Vegetables',
    'fresh Fruit',
    'Bread and juice',
  ]);

  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    getCountry('https://restcountries.com/v3.1/all');
  }, []);

  const getCountry = async (url) => {
    try {
      const res = await axios.get(url);
      if (res !== null) {
        setCountryList(res.data.map((country) => country.name.common));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const navData = [
    {
      cat_name: 'Category1',
      items: [
        { cat_name: 'Subcategory1' },
        { cat_name: 'Subcategory2' },
      ],
    },
    {
      cat_name: 'Category2',
      items: [
        { cat_name: 'Subcategory3' },
        { cat_name: 'Subcategory4' },
      ],
    },
  ];

  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2 logo-container">
              <img src={logo} alt="logo" className="logo" />
            </div>

            {/* Header search starts here */}
            <div className="col-sm-5">
              <div className="headerSearch d-flex align-items-center">
                <Select
                  data={categories}
                  placeholder="All Categories"
                  icon={false}
                />
                <div className="search">
                  <input type="text" placeholder="search for items ..." />
                  <SearchIcon className="searchIcon cursor" />
                </div>
              </div>
            </div>
            {/* Header search ends here */}
            <div className="col-sm-5 d-flex align-items-center justify-content-between">
              <div className="countryWrapper">
                <Select
                  data={countryList}
                  placeholder="Your Location"
                  icon={<FmdGoodOutlinedIcon style={{ opacity: '0.7' }} />}
                />
              </div>

              {/* badges */}
              <ClickAwayListener onClickAway={() => setIsOpenDropDown(false)}>
                <ul className="list list-inline mb-0 headerTabs">
                  <li className="list-inline-item">
                    <span className="d-flex align-items-center">
                      <img src={iconCompare} alt="compare" className="compare-img" />
                      <span className="badge bg-success rounded-circle">3</span>
                      Compare
                    </span>
                  </li>

                  <li className="list-inline-item">
                    <span className="d-flex align-items-center">
                      <img src={iconCart} alt="compare" className="compare-img" />
                      <span className="badge bg-success rounded-circle">3</span>
                      Cart
                    </span>
                  </li>

                  <li className="list-inline-item">
                    <span className="d-flex align-items-center" style={{ marginRight: '10px' }}>
                      <img src={iconWishlist} alt="compare" className="compare-img" style={{ width: '17px', height: '17px' }} />
                      <span className="badge bg-success rounded-circle">3</span>
                      Wishlist
                    </span>
                  </li>

                  <li className="list-inline-item">
                    <span className="d-flex align-items-center" onClick={() => setIsOpenDropDown(!isOpenDropDown)}>
                      <img src={iconAccount} alt="compare" className="compare-img" />
                      Account
                    </span>
                    {/* account dropdown */}
                    {isOpenDropDown && (
                      <ul className="Account-dropdown">
                        <li>
                          <Button className="align-item-center"><PersonIcon /> My Account</Button>
                        </li>
                        <li>
                          <Button className="align-item-center"><FmdGoodIcon /> Order Tracking</Button>
                        </li>
                        <li>
                          <Button className="align-item-center"><FavoriteIcon /> My Wishlist</Button>
                        </li>
                        <li>
                          <Button className="align-item-center"><SettingsIcon /> Setting</Button>
                        </li>
                        <li>
                          <Button className="align-item-center"><ExitToAppIcon />Sign Out</Button>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              </ClickAwayListener>
            </div>
          </div>
        </div>
      </header>
      <Nav data={navData} openNav={false} closeNav={() => {}} />
    </>
  );
};

export default Header;
