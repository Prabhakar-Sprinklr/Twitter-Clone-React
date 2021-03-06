import React from 'react';
import SidebarNavOptions from './components/sidebarNavOptions';
import {OPTION_LIST} from '../../../../data/constants';
import "../../homepage.css";


function Sidenav() {
    
    return (
        <nav className='home-container__section-container sidebar-container'>
            <ul className="sidebar-container__option-list">
                {OPTION_LIST.map(item=>(<SidebarNavOptions key={item.text} text={item.text} Icon={item.Icon} link={item.link} />))}
            </ul>
        </nav>
    )
}

export default Sidenav;