import React from 'react';
import { Link } from 'react-router-dom';
import  { useState} from 'react';

import svg from './../../assets/Group (4).svg'
const Header = () => {
    return (
        <div>
                    <header className='header'>
            <h1>
                Sanjar Batyr 
            </h1>
            <Link to='/'>Home</Link>
            <Link to='/tovar'>Tovars</Link>
            <div className="product">
            <Link to='/tovar' className='Link'><img src={svg} alt="" /></Link>
            <p></p>

            </div>
        </header>
        </div>
    );
}

export default Header;
