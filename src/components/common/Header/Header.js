import React, { useEffect, useState } from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import AppsIcon from '@mui/icons-material/Apps';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import './Header.css';

function Header({toggleButton,viewState,toggleFunction}) {

    let gridView,listView;
    if(viewState==="grid"){
        gridView=true;
        listView=false;
    }
    else{
        gridView=false;
        listView=true;
    }

    let button = (
        <button type="button" className="view-toggle-button" onClick={toggleFunction}>
            {gridView && (<AppsIcon></AppsIcon>)}
            {listView && (<FormatListBulletedIcon></FormatListBulletedIcon>)}
        </button>
    );
    return (

    //Add option to render the list/grid button too, so that this can be used
    //profile page too.

    <header id="page-header">
        <div id="header-twitter-icon-container">
            <a href="/" className="header-twitter-icon-link">
                <TwitterIcon className='twitterIcon'></TwitterIcon>
            </a>

            {toggleButton && button}

        </div>
    </header>
    )
}

export default Header