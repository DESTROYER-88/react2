
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import "./Layout.css"

export default function Fat() {
  return (
    <div>

        <nav>
          <ul className="nav-bar">
            <li><Link className='nav' to="/">Home</Link></li>
            <li><Link className='nav' to="/about">About</Link></li>
            <li><Link className='nav' to="/contact">Contact</Link></li>
          </ul>
        </nav>
      <Outlet/> 
    </div>
  );
}
