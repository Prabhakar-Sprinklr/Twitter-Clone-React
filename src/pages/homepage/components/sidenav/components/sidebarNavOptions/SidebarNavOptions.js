import React from 'react';
import './sidebarNavOptions.css';

function SidebarNavOptions({link , Icon, text}) {
  return (
    <li>
        <a href={link} className='sidebar__navigation-link'>
            <div className="sidebar__anchor-button">
                <Icon />
                <span className='sidebar__option-name'>{text}</span>
            </div>
        </a>
    </li>
  )
}

export default SidebarNavOptions