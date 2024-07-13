import React from 'react';
import Heart from '@/assets/icons/Heart';
import Cart from '@/assets/icons/Cart';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h2>My Image Search</h2>
      <div className='nav_items'>
        <div className='nav_item'>
          <Heart size='16px' />
          <a>Lightboxes</a>
        </div>
        <div className='nav_item'>
          <Cart size='18px' />
          <a>Cart</a>
        </div>
        <button className='signin_btn'>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
