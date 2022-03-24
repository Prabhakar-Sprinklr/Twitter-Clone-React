import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import AppsIcon from '@mui/icons-material/Apps';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import './header.css';

type HeaderProps = {
    shouldShowToggleButton : boolean,
    isGrid? : boolean,
    toggleView? : ()=>void, 
}

function Header({shouldShowToggleButton,isGrid,toggleView}:HeaderProps) : JSX.Element {

    const button : JSX.Element = (
        <button type="button" className="page-header__view-toggle-button" onClick={toggleView}>
            {isGrid?<AppsIcon />:<FormatListBulletedIcon/>}
        </button>
    );
    return (
    <header className="page-header">
        <div className="page-header__twitter-icon-container">
            <a href="/" className="page-header__twitter-icon-link">
                <TwitterIcon className='page-header__twitter-icon' />
            </a>
            {shouldShowToggleButton?button:null}
        </div>
    </header>
    )
}

export default Header;