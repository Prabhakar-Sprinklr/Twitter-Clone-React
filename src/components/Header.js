import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/Header.css';

function Header() {
  return (

    //Add option to render the list/grid button too, so that this can be used
    //profile page too.

    <header id="page-header">
        <div id="header-twitter-icon-container">
            <a href="/" className="header-twitter-icon-link">
                <TwitterIcon className='twitterIcon'></TwitterIcon>
            </a>
        </div>
    </header>

  )
}

export default Header