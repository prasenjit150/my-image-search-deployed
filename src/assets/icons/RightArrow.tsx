import { IconProps } from '@/types/icon';
import React from 'react';

const RightArrow = (props: IconProps) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      transform='rotate(180)'
    >
      <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        stroke-linecap='round'
        stroke-linejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        {' '}
        <path
          d='M15 7L10 12L15 17'
          stroke='#000000'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        ></path>{' '}
      </g>
    </svg>
  );
};

export default RightArrow;
