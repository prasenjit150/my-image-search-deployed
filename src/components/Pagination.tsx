import LeftArrow from '@/assets/icons/LeftArrow';
import RightArrow from '@/assets/icons/RightArrow';
import React from 'react';

const Pagination = () => {
  const Button = ({ isLeft = false }: { isLeft?: boolean }) => {
    return (
      <button className='pagination_btn'>
        {isLeft ? <LeftArrow size='20px' /> : <RightArrow size='20px' />}
      </button>
    );
  };
  return (
    <div className='pagination_container flex_center'>
      <div className='no_btns flex_center'>
        Page 1 of 500
        <Button isLeft />
        <Button />
      </div>
      <div className='go_to flex_center'>
        Go to page
        <input />
        <Button />
      </div>
    </div>
  );
};

export default Pagination;
