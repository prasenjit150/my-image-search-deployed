import { IconProps } from '@/types/icon';
import React from 'react';

const LeftArrow = (props: IconProps) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      transform='rotate(0)'
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
          stroke='#d4d4d4'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        ></path>{' '}
      </g>
    </svg>
  );
};

export default LeftArrow;
