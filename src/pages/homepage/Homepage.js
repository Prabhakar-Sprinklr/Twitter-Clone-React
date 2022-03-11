import React, { Fragment } from 'react';
import FeedContainer from "./components/feedContainer";
import Header from '../../components/header';
import Sidenav from './components/sidenav';
import WidgetContainer from './components/widgetContainer';
import './homepage.css';

function Homepage() {
  return (
    <Fragment>
        <Header toggleButton={false} />
        <div className='home-container'>
            <FeedContainer className='section-container feed-container' />
            <Sidenav className='section-container sidebar-container' />
            <WidgetContainer className='section-container widget-container' />
        </div>
    </Fragment>
  );
}

export default Homepage;