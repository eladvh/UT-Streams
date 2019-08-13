import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import '../css/Header.css';

const Header = () => {
        return (
            <header>
              <div className="container">
                <div>
                <Link to="/"><h2 className="headerTitle">Streamy</h2></Link>
                </div>
                  <nav>
                    <Link to="/">Profile</Link>
                    <Link to="/"><GoogleAuth /></Link>
                  </nav>
              </div>
            </header>
        );
};


export default Header;