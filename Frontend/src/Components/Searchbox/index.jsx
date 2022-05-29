import React from 'react';
import './index.css';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

export default function SearchBox() {
  return (
    <div className='searchbox'>
      <SearchIcon />
      <input
        type='search'
        placeholder='Filter by title, companies, expertise...'
      />
    </div>
  );
}
