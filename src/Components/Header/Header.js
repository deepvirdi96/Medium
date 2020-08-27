import React from 'react';
import './Header.css';
import HeaderMenu from '../HeaderMenu/HeaderMenu';

const Header = () => {
    return (
        <div className="header ">
            <div className="header__container">
                <div className="header__logo">Medium</div>
                <HeaderMenu />
            </div>
        </div>
    );
}

export default Header;
