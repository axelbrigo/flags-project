import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import Header from '../components/header/Header';
import '../pages/country.css'

export default function Country() {
  const [country, setCountry] = useState({})
  const { name } = useParams()

  const fetchCountryData = async () => {
    const res = await fetch(`https://restcountries.com/v2/name/${name}`)
    const data = await res.json()
    setCountry(data[0])
  }

  useEffect(() => {
    fetchCountryData()

  }, [name])

  return (
    <>
      <Header className="header--country" />

      <section className='section__country'>
        <div className='div__button'><Link to="/" className='section__country--buttonback'><span><p>←</p></span><p>Back</p></Link></div>


        <div className='section__one'>
          <img className='flag__img' src={country.flag} alt={country.name} />
        </div>

        <div className='section__two' >
          <div><h1 className='country__name'>{country.name} </h1></div>

          <div className='country__flex'>

            <div className='country__firstColumn'>
              <p><strong>Native Name:</strong> {country.nativeName}</p>
              <p><strong>Population:</strong> {country.population}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Sub Region:</strong> {country.subRegion}</p>
              <p><strong>Capital:</strong> {country.capital}</p>

            </div>

            <div className='country__secondColumn'>
              <p><strong>Top Level Domain: </strong>{country.topLevelDomain}</p>
              <p><strong>Currencies: </strong> {country.currencies?.map(cur => cur.name)} </p>
              <p><strong>Languages: </strong> {country.languages?.map(lang => lang.name + ", ")} </p>

            </div>

          </div>


          <div className='main__border'>
            <p className='borders'><strong>Borders: </strong>  {country.borders?.map(bor => <p className='borders__individual'> {bor} </p>)}  </p>
          </div>

        </div>


      </section>
    </>
  );
}
