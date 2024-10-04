import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button'; 
import FavoriteIcon from '@mui/icons-material/Favorite';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const Product = (props) => {
  const { tag } = props;
  return (
    <div className="productThumb">
      <span className={`badge ${tag.toLowerCase()}`}>{tag.toUpperCase()}</span>
      <div className="imageWrapper">
        <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-16-2.jpg" className="w-100" alt="..." />
        <div className="Overlay transition">
          <ul className="list list-inline">
            <li className="list-inline-item">
              <a className="cursor">
                <FavoriteIcon />
              </a>
            </li>
            <li className="list-inline-item">
              <a className="cursor">
                <CompareArrowsIcon />
              </a>
            </li>
            <li className="list-inline-item">
              <a className="cursor">
                <RemoveRedEyeIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="info">
        <span className='d-block catName'>snack</span>
        <h4 className='title'>
          <Link>Seeds of Change Organic Quinoa, Brown, & Red Rice</Link>
        </h4> 
        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
        <span className="d-block brand text-g">
          By <Link className='text-g'>Nest Food</Link>
        </span>
        <div className="d-flex align-items-center mt-2">
          <div className="d-flex align-items-center">
            <span className="price text-g font-weight-bold">$28.85</span>
            <span className="old-price">$32</span>
          </div>
          <Button className='bg-g ml-auto transition' style={{ backgroundColor: '#3bb77e', left: '35px' }}>Add</Button>
        </div>
      </div>
    </div>
  );
}

export default Product;
