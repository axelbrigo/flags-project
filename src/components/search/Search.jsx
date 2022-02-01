import React from 'react';
import { FaSearch } from 'react-icons/fa'
import '../search/search.css'
import { useState, useEffect } from 'react';

export default function Search({ searchCountries, searchInput, updateCountries }) {
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  const [filterActive, setFilterActive] = useState(false)






  return (
    <div className='search__main--section '>
      <button className='search__button'>
        <FaSearch className='search__icon' />
        <input className='search__input' type="search" id='search__input' placeholder='Search for a country...' onChange={(e) => searchCountries(e.target.value)}></input>
      </button>

      <div className='select__region' onClick={() => setFilterActive(!filterActive)}>
        <p>Filter by Region</p>
        {filterActive &&
          <div className='region__options dark'>
            {regions?.map((continente) => {
              return (
                <p onClick={() => {

                  updateCountries(continente)

                }}>{continente} </p>
              )
            })}
          </div>

        }
      </div>

    </div>

  );
}
