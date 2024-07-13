import Cart from '@/assets/icons/Cart';
import Download from '@/assets/icons/Download';
import ImageIcon from '@/assets/icons/Image';
import ImgsWhite from '@/assets/icons/ImgsWhite';
import Plus from '@/assets/icons/Plus';
import { Image } from '@/types/search';
import React, { ReactElement } from 'react';

interface ImageCardProps {
  image: Image;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  const IconBtn = ({
    icon,
    bg,
    isDownload = false,
  }: {
    icon: ReactElement;
    bg: string;
    isDownload?: boolean;
  }) => {
    return (
      <a
        className='icon_btn'
        href={image.src.original}
        style={{ background: bg }}
        download={isDownload}
      >
        {icon}
      </a>
    );
  };
  return (
    <div className='image_card' title={image.alt}>
      <div className='img_top_details flex_center'>
        <div className='img_top_details_id '>ID</div>
        <span>{image.id}</span>
        <p>- {image.alt}</p>
      </div>
      <img src={image.src.large} alt={image.alt} />
      <div className='image_info'>
        <p>Photographer: {image.photographer}</p>
        <div className='image_info_btns flex_center'>
          <IconBtn icon={<Cart size={'16px'} />} bg={'#05FC7C'} />
          <IconBtn
            icon={<Download size={'16px'} />}
            bg={'#2E2724'}
            isDownload
          />
          <IconBtn icon={<Plus size={'16px'} />} bg={'#2E2724'} />
          <IconBtn icon={<ImgsWhite size={'16px'} />} bg={'#2E2724'} />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
