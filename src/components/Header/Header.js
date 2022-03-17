import React, { useCallback } from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import AppsIcon from '@mui/icons-material/Apps';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import './header.css';

function Header({toggleButton,viewState,toggleFunction}) {

    const gridView = (viewState==="grid")?true:false;
    const listView = (viewState==="grid")?false:true;

    const button = (
        <button type="button" className="page-header__view-toggle-button" onClick={toggleFunction}>
            {gridView && (<AppsIcon />)}
            {listView && (<FormatListBulletedIcon />)}
        </button>
    );
    return (
    <header className="page-header">
        <div className="page-header__twitter-icon-container">
            <a href="/" className="page-header__twitter-icon-link">
                <TwitterIcon className='page-header__twitter-icon' />
            </a>
            {toggleButton && button}
        </div>
    </header>
    )
}

export default Header;