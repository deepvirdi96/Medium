import React from 'react';
import './Header.css';
import HeaderMenu from '../HeaderMenu/HeaderMenu';

const Header = () => {
    return (
        <div className="header ">
            <div className="header__container">
                <div className="header__logo">{process.env.REACT_APP_APP_NAME}</div>
                <HeaderMenu />
            </div>
        </div>
    );
}

export default Header;
