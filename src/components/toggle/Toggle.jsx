import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa'
import '../toggle/toggle.css'


export default function Toggle() {
  const [darkMode, setDarkMode] = useState(false)
  const changeTheme = () => {
    document.body.classList.toggle('dark')
    setDarkMode(!darkMode)
  }
  return (
    <button className='button__mode' onClick={changeTheme}>
      {darkMode ? <div className='light__text'><p>Dark Mode</p> <FaMoon className='moon__icon' /> </div> : <div className='dark__text'><p>Light Mode</p><FaSun className='sun__icon' /></div>}
    </button>
  );
}
