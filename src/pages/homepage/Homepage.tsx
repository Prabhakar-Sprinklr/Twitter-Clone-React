import React, { Fragment } from 'react';
import FeedContainer from "./components/feedContainer";
import Header from '../../components/header';
import Sidenav from './components/sidenav';
import WidgetContainer from './components/widgetContainer';
import './homepage.css';

function Homepage() {
  return (
    <Fragment>
        <Header shouldShowToggleButton={false} />
        <div className='home-container'>
            <FeedContainer />
            <Sidenav />
            <WidgetContainer />
        </div>
    </Fragment>
  );
}

export default Homepage;