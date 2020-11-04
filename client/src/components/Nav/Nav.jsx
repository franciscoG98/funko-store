import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Nav.css';
// import Button from '@material-ui/core/Button';

const Nav = () => {
    return (
        <nav className="navbar">
        {/* <Link to='/'>
          <span className="navbar-brand">
            <img id="logoFunko" src='' className="d-inline-block align-top" alt="creemos un logo " />
            Funkos
          </span>
        </Link>
        <Link to='/about'>
          <span>About</span>
        </Link> */}
        <SearchBar
        //   onSearch={onSearch}
        />
    </nav>
    )
}

export default Nav;

