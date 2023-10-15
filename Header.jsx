import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

function Header() {
  return (
    <header className='navbar'>
      <a href='/'>DEV@Deakin</a>
      <input type='text' placeholder='Search..' />
      <nav className='right'>
        <a href='#post'>Post</a>
        <Link to='/Login'>Login</Link>
      </nav>
    </header>
  );
}

export default Header;
