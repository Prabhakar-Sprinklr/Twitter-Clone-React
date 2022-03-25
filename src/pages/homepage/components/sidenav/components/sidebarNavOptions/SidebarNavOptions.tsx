import React from 'react';
import './sidebarNavOptions.css';

type SidebarNavOptionsProps = {
    link : string,
    Icon : React.ElementType,
    text : string,
}

function SidebarNavOptions({link , Icon, text}:SidebarNavOptionsProps) {
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

export default SidebarNavOptions;