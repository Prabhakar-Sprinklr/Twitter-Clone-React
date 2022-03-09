import React, { Fragment } from 'react';
import FeedContainer from '../components/homepage/FeedContainer/FeedContainer';
import Header from '../components/common/Header/Header';
import Sidenav from '../components/homepage/Sidenav/Sidenav';
import WidgetContainer from '../components/homepage/WidgetContainer/WidgetContainer';
import '../components/homepage/Homepage.css';

function Homepage() {
  return (
    <Fragment>
        <Header toggleButton={false}></Header>
        <div className='home-container'>
            <FeedContainer className='section-container feed-container'></FeedContainer>
            <Sidenav className='section-container sidebar-container'></Sidenav>
            <WidgetContainer className='section-container widget-container'></WidgetContainer>
        </div>
    </Fragment>
  );
}

export default Homepage;