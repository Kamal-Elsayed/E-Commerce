import React from 'react';
import './Header.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {

  const [{basket}, dispatch] = useStateValue();

    return (
        <div className='header'>
          <Link to="./" style={{textDecoration: "none"}}>
            <div className="header-logo">
          <StoreMallDirectoryIcon className="header-logoImg" />
          <h2 className="header-logoTitle">E-Commerce</h2>
      </div>
      </Link>
      <div className="header-search">
          <input type="text" className='header-searchInput' />
          <SearchIcon className='header-searchIcon' />
      </div>
      <div className="header-nav">
          <div className="nav-item">
            <span className="nav-itemLineONE">Hello Guest</span>
            <span className="nav-itemLineTWO">Sign in</span>
          </div>
          <div className="nav-item">
            <span className="nav-itemLineONE">Your</span>
            <span className="nav-itemLineTWO">Shop</span>
          </div>
          <Link to="./checkout" style={{textDecoration: "none"}}>
            <div className="nav-itemBasket">
              <ShoppingBasketIcon fontSize='large'/>
              <span className="nav-itemLineTWO nav-basketCount">{basket.length}</span>
            </div>
          </Link>
          
      </div>
        </div>
    );
}


export default Header;