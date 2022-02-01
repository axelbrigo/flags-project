import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../card/card.css'
import Search from '../search/Search';

export default function Card() {
  const [countries, setCountries] = useState([])
  const [filtered, setFiltered] = useState([])
  const [searchInput, setSearchInput] = useState([])
  let list;

  const searchCountries = (searchValue) => {
    setSearchInput(searchValue)

    if (searchInput) {
      const filteredCountries = countries.filter((country) => (
        Object.values(country).join("").toLowerCase().includes(searchValue.toLocaleLowerCase
          ())
      ))
      setFiltered(filteredCountries)
    } else {
      setFiltered(countries)
    }
  }

  const updateCountries = async (region) => {
    const res = await fetch(`https://restcountries.com/v2/region/${region.toLowerCase()}`)
    const data2 = await res.json()
    setFiltered(data2)
    console.log(setFiltered(data2))


  }

  const fetchCountries = async () => {
    const res = await fetch(`https://restcountries.com/v2/all`)
    const data = await res.json()
    setCountries(data)

  }


  if (filtered?.length > 0) {
    list = filtered;
  } else {
    list = countries;
  }



  React.useEffect(() => {
    fetchCountries()

  }, [])



  return <>
    <Search searchCountries={searchCountries} searchInput={searchInput} updateCountries={updateCountries} />
    <section className='countries__main'>
      {list?.map((item) => (
        <Link className='link__styles' to={`/${item?.name}`} >
          <article className='countries__cards' key={item.nativeName}>
            <div className='countries__container--img'>
              <img className='countries__img' key={item.flags.svg} src={item.flags.svg} alt="Flag" />
            </div>

            <div className='countries__container--name'>
              <h2 className='country__data--title' key={item.nativeName}>{item.nativeName}</h2>
              <ul>
                <li key={item.population}><strong>Population:</strong> {item.population}</li>
                <li key={item.capital}><strong>Capital:</strong> {item.capital}</li>
                <li key={item.region}><strong>Region:</strong> {item.region}</li>
              </ul>
            </div>
          </article>
        </Link>
      ))}
    </section>
  </>;
}
