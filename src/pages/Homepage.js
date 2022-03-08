import React, { Fragment } from 'react';
import FeedContainer from '../components/FeedContainer';
import Header from '../components/Header';
import Sidenav from '../components/Sidenav';
import WidgetContainer from '../components/WidgetContainer';
import '../styles/Homepage.css';

function Homepage() {
  return (
    <Fragment>
        <Header></Header>
        <div className='home-container'>
            <FeedContainer className='section-container feed-container'></FeedContainer>
            <Sidenav className='section-container sidebar-container'></Sidenav>
            <WidgetContainer className='section-container widget-container'></WidgetContainer>
        </div>
    </Fragment>
  );
}

export default Homepage;