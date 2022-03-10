import React, { Fragment } from 'react';
import { 
  FeedContainer,
  Sidenav,
  WidgetContainer,
  Header
} from '.';
import './Homepage.css';

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