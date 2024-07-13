'use client';
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ImageList from '../components/ImageList';
import { fetchImages } from '../utils/api';
import { Image } from '@/types/search';
import Navbar from '@/components/Navbar';
import Tabs from '@/components/Tabs';
import Pagination from '@/components/Pagination';

const HomePage: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setQuery(query);
    setPage(1);
    try {
      setIsLoading(true);
      const data = await fetchImages(query, 1, perPage);
      setImages(data.photos);
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    try {
      setIsLoading(true);
      const data = await fetchImages(query, nextPage, perPage);
      setImages([...images, ...data.photos]);
      setPage(nextPage);
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className='main_container'>
      <SearchBar onSearch={handleSearch} />
      {images?.length > 0 ? (
        <>
          <Tabs />
          <ImageList images={images} query={query} />
          <div className='next_btn_container'>
            <button className='next_page_btn' onClick={handleLoadMore}>
             {isLoading ? "Loading..." : "Load more"}
            </button>
          </div>
          <div className='bottom_pagination flex_center'>
            <p className='bottom_pagination_text'>
              Search Results for <span>{query}</span> Stock Photos and Images
              &#40;1,652,108&#41;
            </p>
            <Pagination />
          </div>
        </>
      ) : (
        <div className='no_img_text'>{isLoading ? "Loading...": "Type and hit enter to see the images!"}</div>
      )}
    </main>
  );
};

export default HomePage;
