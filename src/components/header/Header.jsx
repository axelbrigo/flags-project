import React from 'react';
import '../header/header.css'
import Toggle from '../toggle/Toggle';

export default function Header() {
  return <header className='header__main'>


    <div className='header__title'>
      <h3>Where in the world?</h3>
    </div>


    <Toggle />

  </header>;
}
