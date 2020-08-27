import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBookmark, faBell } from '@fortawesome/free-solid-svg-icons';

import './HeaderMenu.css';
import AvatarMenu from '../AvatarMenu/AvatarMenu';

/**
 * TODO : add random class for broken images
 */
const HeaderMenu = () => {
    return (
        <div className="header__menu">
            <div className="header__menuItem">
                <FontAwesomeIcon icon={faSearch} />
            </div>
            <div className="header__menuItem">
                <FontAwesomeIcon icon={faBookmark} />
            </div>
            <div className="header__menuItem">
                <FontAwesomeIcon icon={faBell} />
            </div>
            <div className="header__menuItemProfile">
                <AvatarMenu />
            </div>
        </div>
    );
}

export default HeaderMenu;
