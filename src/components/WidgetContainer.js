import React, { Fragment } from 'react'
import '../styles/Homepage.css';
import '../styles/WidgetContainer.css'

function WidgetContainer() {
  return (
    // <div className='section-container widget-container'>WidgetContainer</div>
    <Fragment>
        <aside class="section-container widget-container">
            <iframe class="widget-iframe" src="https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fjack%2Fstatus%2F20"></iframe>
            <iframe class="widget-iframe" src="https://www.youtube.com/embed/XIOLqoPHCJ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe class="widget-iframe" src="https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fjack%2Fstatus%2F20"></iframe>
        </aside>
    </Fragment>
  )
}

export default WidgetContainer