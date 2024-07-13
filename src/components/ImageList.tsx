import React from 'react';
import ImageCard from './ImageCard';
import { Image } from '@/types/search';
import Pagination from './Pagination';

interface ImageListProps {
  images: Image[];
  query: string;
}

const ImageList: React.FC<ImageListProps> = ({ images, query }) => {
  return (
    <div className='img_list_container'>
      <div className='img_header_container flex_center'>
        <div className='img_head_text'>
          <span className='img_query'>{query}</span> Stock Photos and Images
          <span className='img_query_nos'> &#40;1,652,108&#41;</span>
        </div>
        <Pagination />
      </div>
      <div className='image_list'>
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

export default ImageList;
