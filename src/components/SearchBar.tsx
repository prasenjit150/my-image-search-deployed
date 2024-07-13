'use client';
import Camera from '@/assets/icons/Camera';
import DownArrow from '@/assets/icons/DownArrow';
import Image from '@/assets/icons/Image';
import Search from '@/assets/icons/Search';
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className='search flex_center'>
      <div className='search_filter flex_center'>
        <div className='search_filter_name flex_center'>
          <Image size='16px' />
          All images
        </div>
        <DownArrow size='18px' />
      </div>
      <form onSubmit={handleSubmit} className='searchbar flex_center'>
        <Search size='18px' />
        <input
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search images...'
        />
      </form>
      <div className='search_action flex_center'>
        <Camera size='16px' />
        Search by image
      </div>
    </div>
  );
};

export default SearchBar;
