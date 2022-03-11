import React from 'react';
import './sidebarNavOptions.css';

function SidebarNavOptions({link , Icon, text}) {
  return (
    <li>
        <a href={link} className='sidebar-navigation-link'>
            <div className="sidebar-anchor-button">
                <Icon />
                <span className='sidebar-option-name'>{text}</span>
            </div>
        </a>
    </li>
  )
}

export default SidebarNavOptions