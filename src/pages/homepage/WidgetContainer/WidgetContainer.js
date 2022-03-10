import React, { Fragment } from 'react'
import '../Homepage.css';
import './WidgetContainer.css'

function WidgetContainer() {
  return (
    // <div className='section-container widget-container'>WidgetContainer</div>
    <Fragment>
        <aside className="section-container widget-container">
            <iframe className="widget-iframe" src="https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fjack%2Fstatus%2F20"></iframe>
            <iframe className="widget-iframe" src="https://www.youtube.com/embed/XIOLqoPHCJ4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe className="widget-iframe" src="https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fjack%2Fstatus%2F20"></iframe>
        </aside>
    </Fragment>
  )
}

export default WidgetContainer