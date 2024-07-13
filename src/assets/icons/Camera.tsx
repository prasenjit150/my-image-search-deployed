import { IconProps } from '@/types/icon';
import React from 'react';

const Camera = (props: IconProps) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
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
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M15.5961 2.80655C15.4524 2.33787 15.0735 2 14.6891 2H9.06392C8.67947 2 8.30053 2.33787 8.15688 2.80655L7.4215 5H3C1.89543 5 1 5.89543 1 7V20C1 21.1046 1.89543 22 3 22H21C22.1046 22 23 21.1046 23 20V7C23 5.89543 22.1046 5 21 5H16.331L15.5961 2.80655ZM16 13C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13C8 10.7909 9.79086 9 12 9C14.2091 9 16 10.7909 16 13Z'
          fill='#000000'
        ></path>{' '}
      </g>
    </svg>
  );
};

export default Camera;
