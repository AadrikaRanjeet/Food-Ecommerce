import React from 'react'
import './style.css';
import Button from '@mui/material/Button';






const NewsLetter = () => {
  return (
    <div className="newsLetterBanner">
    <input type="text"placeholder='your email address' />
    <Button className='bg-g'variant="contained">Subscribe</Button>
   </div>
  )
}

export default NewsLetter
